export interface PhaseGroup {
  label: string;
  items: string[];
}

export interface Phase {
  num: number;
  badge: string;
  label: string;
  title: string;
  duration: string;
  groups?: PhaseGroup[];
  topics?: string[];
  resources: string[];
  tip: string;
}

export const phases: Phase[] = [
  {
    num: 1, badge: "badge-purple", label: "Fundamentos",
    title: "Java básico + POO", duration: "3–4 semanas",
    groups: [
      { label: "Sintaxe e Tipos", items: ["Tipos primitivos: int, double, boolean, char, long, float","Tipos referência e wrapper classes (Integer, Double, Boolean...)","Declaração de variáveis, constantes (final) e escopo","Operadores aritméticos, relacionais e lógicos","Casting: conversão implícita e explícita entre tipos"] },
      { label: "Controle de Fluxo", items: ["if / else if / else","switch e switch expression (Java 14+)","Loops: for, while, do-while","break, continue e return"] },
      { label: "Strings e Arrays", items: ["Métodos de String: length(), substring(), contains(), split(), trim()","Comparação de Strings: equals() vs ==","StringBuilder para concatenação eficiente","Arrays unidimensionais e multidimensionais","Iterando com for tradicional e for-each"] },
      { label: "POO — Fundamentos", items: ["Classes, objetos e construtores","Métodos de instância e métodos estáticos (static)","Modificadores de acesso: public, private, protected","Encapsulamento com getters e setters","Palavra-chave this e sobrecarga de métodos"] },
      { label: "POO — Herança e Abstração", items: ["Herança com extends e reutilização de código","Polimorfismo e sobrescrita de métodos (@Override)","Classes abstratas e métodos abstratos","Interfaces e implementação múltipla (implements)","Diferença entre classe abstrata e interface"] },
      { label: "Exceções", items: ["O que são exceções e por que existem","try / catch / finally","Exceções checked vs unchecked (RuntimeException)","throws e throw","Criar exceções customizadas estendendo Exception"] },
      { label: "Collections e Generics", items: ["List com ArrayList: adicionar, remover, buscar","Map com HashMap: chave-valor, get(), put(), containsKey()","Set com HashSet: sem duplicatas","Iterando com for-each e forEach()","Generics básicos: List<String>, Map<String, Integer>"] },
      { label: "Java Moderno (básico)", items: ["Lambda expressions: (x) -> x * 2","Streams: filter(), map(), forEach(), collect()","Optional para evitar NullPointerException"] },
    ],
    resources: ["MOOC Java (Helsinki)","Curso em Vídeo – Java","Livro: Use a Cabeça! Java","Documentação Oracle (docs.oracle.com/javase)"],
    tip: "Escreva código todo dia. Crie classes simples como Carro, Pessoa, Conta Bancária para praticar POO. Não avance para o próximo grupo sem ter escrito pelo menos um exemplo de cada tópico."
  },
  {
    num: 2, badge: "badge-indigo", label: "Mini Projeto",
    title: "CRUD em Java puro", duration: "1 semana",
    groups: [
      { label: "Planejamento", items: ["Escolher o domínio: ex. Gerenciador de Contatos, Estoque de Produtos ou Lista de Tarefas","Definir os atributos da entidade (id, nome, email...)","Mapear as operações: criar, listar, buscar, atualizar, deletar"] },
      { label: "Modelagem com POO", items: ["Criar a classe da entidade com atributos privados e getters/setters","Criar um repositório (ex: ContatoRepository) que usa ArrayList internamente","Separar responsabilidades: entidade, repositório e menu (main)"] },
      { label: "Implementação do CRUD", items: ["CREATE: adicionar novo item à lista com validação básica","READ: listar todos os itens e buscar por id ou nome","UPDATE: localizar item e alterar campos específicos","DELETE: remover item por id com confirmação","Gerar ids automáticos com contador ou UUID"] },
      { label: "Interface via Console", items: ["Menu interativo com Scanner (loop + switch)","Tratar entradas inválidas com try/catch","Exibir resultados formatados no terminal"] },
      { label: "Boas Práticas", items: ["Lançar exceção customizada quando item não é encontrado","Separar o projeto em pacotes: model, repository, app","Escrever métodos pequenos com responsabilidade única"] },
    ],
    resources: ["IntelliJ IDEA Community (gratuito)","Curso em Vídeo – Java (exercícios)","DevDojo – Java (YouTube BR)"],
    tip: "Não use banco de dados ainda — armazene tudo em ArrayList. O objetivo é consolidar POO, Collections e Exceções antes de partir para web."
  },
  {
    num: 3, badge: "badge-blue", label: "Redes",
    title: "HTTP e como a web funciona", duration: "1 semana",
    topics: ["O que é HTTP e como funciona","Métodos: GET, POST, PUT, DELETE","Status codes (200, 404, 500...)","JSON e como estruturar dados","O que é uma API REST"],
    resources: ["MDN Web Docs – HTTP","Postman (ferramenta gratuita)","REST API Tutorial"],
    tip: "Use o Postman para fazer chamadas a APIs públicas (ex: ViaCEP, OpenWeatherMap) e veja as respostas."
  },
  {
    num: 4, badge: "badge-teal", label: "Framework",
    title: "Spring Boot", duration: "3–4 semanas",
    topics: ["O que é o Spring e por que usá-lo","Spring Initializr e estrutura do projeto","Anotações essenciais: @RestController, @GetMapping...","Criando endpoints REST","Injeção de dependência (@Autowired)","Validações com Bean Validation"],
    resources: ["Documentação oficial Spring","Amigoscode – Spring Boot (YouTube)","Fernanda Kipper (YouTube BR)"],
    tip: "Crie um projeto do zero no start.spring.io. O 'Hello World' do Spring Boot já ensina muito."
  },
  {
    num: 5, badge: "badge-amber", label: "Projeto",
    title: "Criar uma API do zero", duration: "1–2 semanas",
    topics: ["Definir o domínio: ex. API de tarefas ou de produtos","Modelar os endpoints (GET /tarefas, POST /tarefas...)","Criar os DTOs e entidades","Testar com Postman ou Insomnia","Tratar erros e retornar status corretos"],
    resources: ["Insomnia (cliente REST gratuito)","Spring Validation docs","Baeldung.com"],
    tip: "Escolha um tema simples como To-Do List ou Cardápio de restaurante. O objetivo é ter um CRUD funcionando."
  },
  {
    num: 6, badge: "badge-coral", label: "Dados",
    title: "Banco de dados", duration: "2–3 semanas",
    topics: ["SQL básico: SELECT, INSERT, UPDATE, DELETE","Spring Data JPA e Hibernate","Anotações: @Entity, @Id, @Column","Repositories e queries automáticas","H2 (dev) e PostgreSQL ou MySQL (produção)","Migrations com Flyway ou Liquibase"],
    resources: ["PostgreSQL Tutorial","Spring Data JPA docs","H2 Console (embutido)"],
    tip: "Comece com H2 em memória para não precisar instalar nada. Depois migre para PostgreSQL."
  },
  {
    num: 7, badge: "badge-green", label: "Deploy",
    title: "Subir o projeto (deploy)", duration: "1–2 semanas",
    topics: ["O que é um servidor e como funciona","Variáveis de ambiente e configurações","Build com Maven ou Gradle (gerar o .jar)","Deploy no Railway ou Render (gratuitos)","Configurar banco remoto (Railway ou Supabase)","Testar a API em produção"],
    resources: ["Railway.app","Render.com","Supabase (PostgreSQL grátis)"],
    tip: "Railway é a opção mais simples para iniciantes: conecta no GitHub e faz deploy automático."
  },
];
