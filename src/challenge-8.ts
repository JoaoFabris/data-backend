import express, { Request, Response, NextFunction } from 'express';
// 🎯 Desafio 2: Sistema de Autenticação JWT
// Contexto: Implementar autenticação básica para proteger endpoints.
// Requisitos:



// Criar endpoint de login que retorna JWT
// Criar middleware de autenticação
// Proteger rotas específicas
// Validar token em requisições

// Endpoints:
// POST /auth/login - Recebe email/senha, retorna token
// GET /auth/profile - Retorna dados do usuário (protegida)
// Estrutura de usuário:
// typescriptinterface User {
//   id: string;
//   nome: string;
//   email: string;
//   senha: string; // hash
//   role: 'admin' | 'user';
// }

// /home/fabris/data-backend/src/challenge-8.ts

//tornando suas funcionalidades disponíveis para criar aplicações web, APIs, definir rotas (como app.get()) e gerenciar requisições e respostas de forma simples e eficiente
import jwt, { JwtPayload } from 'jsonwebtoken'// é usado para criar, assinar e verificar tokens que permitem a comunicação segura entre duas partes, geralmente um cliente e um servidor
import bcrypt from 'bcryptjs'; // Gerea um hash para o password. fornece uma maneira segura de armazenar senhas, convertendo-as em uma forma ilegível (hash) antes de salvá-las em um banco de dados
import dotenv from 'dotenv';
import crypto from 'crypto';


//JwtPayload é uma interface do próprio jsonwebtoken que representa os campos padrão de um JWT, como por exemplo:

// iat → issued at (quando o token foi criado)

// exp → expiration (quando expira)

// nbf → not before

// Ou seja, todo token válido pode ter esses campos.
const app = express();

dotenv.config()

const SECRET_KEY = process.env.JWT_SECRET; //Em aplicações web, a SECRET_KEY é usada para assinar criptograficamente os cookies de sessão
const PORT = process.env.PORT || 3001;

type User = {
  id: string;
  nome: string;
  email: string;
  senha: string;
  role: 'admin' | 'user'
}

interface TokenPayload extends JwtPayload {
  id: string;
  email: string;
  role: 'admin' | 'user'
}


interface CustomRequest extends Request {
  user?: TokenPayload
}

app.use(express.json()); // Permite que o Express leia JSON no corpo da requisição

const users: User[] = [
  {
    id: "1",
    nome: 'Mayk',
    email: 'mayk@example.com',
    // Hash da senha '123456' gerado pelo bcrypt
    senha: '$2a$10$N9qo8uLOickgx2ZMRZoMye8QnlQKOmfcK2bpOZjsb5r8KqJfKJfNy',
    role: 'admin'
  }
];

function verifyToken(req: CustomRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1] // Padrão "Bearer TOKEN" o split corta aonde houver espaço vazio na string ["Bearer", "abc123xyz"]. Resultado: "abc123xyz".

  if (!token) {
    return res.status(401).json({ message: "Acesso negado!" })
  }

  try {
    const verified = jwt.verify(token, SECRET_KEY!) as TokenPayload // "!" Eu garanto que esta variável não é nula (null) nem indefinida (undefined) neste momento". 
    req.user = verified; // Adiciona os dados do usuário na requisição
    next()
  } catch (err) {
    return res.status(403).json({ message: "Token inválido" })
  }
}

app.post('/auth/signup', async (req: Request, res: Response) => {
  const { nome, senha, email } = req.body

  try {
    if (!nome) {
      return res.status(400).json({ message: "Nome é necessário" })
    }
    if (!senha) {
      return res.status(400).json({ message: "Senha é necessário" })
    }
    if (!email) {
      return res.status(400).json({ message: "Email é necessário" })
    }

    const findUuser = users.find(f => f.email === email)
    if (findUuser) {
      return res.status(400).json({ message: "email ja cadastrado" })
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(senha, saltRounds)
    const userData = {
      ...req.body,
      id: crypto.randomUUID(), //gera random 
      role: 'user',
      senha: hashedPassword
    }
    users.push(userData)

    return res.status(201).json({ message: "Usuário criado", nome: nome, })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }

})

app.post('/auth/login', async (req: Request, res: Response) => {
  const { email, senha } = req.body
  try {
    const findUser = users.find(f => f.email === email)
    if (!findUser || !senha) {
      return res.status(401).json({ message: "credenciais incorretas" })
    }
    const comparePassword = await bcrypt.compare(senha, findUser.senha)
    if (!comparePassword) {
      return res.status(401).json({ message: "credenciais incorretas" })
    }

    const token = jwt.sign({
      id: findUser.id,
      email: findUser.email,
      role: findUser.role,
    },

      SECRET_KEY!, { expiresIn: '1h' })

    return res.status(200).json({ message: "Login realizado", token: token })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})


app.get('/auth/profile', verifyToken, (req: CustomRequest, res: Response) => {
  return res.status(200).json({ id: req.user?.id, email: req.user?.email, role: req.user?.role })
})


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));