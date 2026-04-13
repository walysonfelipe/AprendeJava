import { Phase } from './phases';

export const phasesC: Phase[] = [
  {
    num: 1, badge: 'badge-blue', label: 'Fundamentos',
    title: 'Sintaxe e tipos em C', duration: '2–3 semanas',
    groups: [
      { label: 'Compilação e Estrutura', items: ['O que é linguagem compilada e o papel do GCC/Clang','Estrutura mínima: #include, main(), return 0','Compilando com gcc hello.c -o hello e executando','Warnings e erros de compilação: como ler a mensagem','Diretivas de pré-processador: #include e #define'] },
      { label: 'Tipos e Variáveis', items: ['Tipos primitivos: int, float, double, char, long','Signed vs unsigned: diferença prática','Declaração e inicialização de variáveis','Constantes com const e com #define','sizeof() para inspecionar o tamanho de cada tipo'] },
      { label: 'Entrada e Saída', items: ['printf() com formatadores: %d, %f, %s, %c, %ld','scanf() para leitura do teclado','Leitura de strings com fgets (evitando gets)','Formatação de saída: precisão, alinhamento (%5d, %.2f)','Flush do buffer: fflush(stdout)'] },
      { label: 'Operadores', items: ['Operadores aritméticos: +, -, *, /, % (divisão inteira)','Operadores de comparação: ==, !=, <, >, <=, >=','Operadores lógicos: && (AND), || (OR), ! (NOT)','Operadores bit a bit: &, |, ^, ~, <<, >>','Operador ternário: cond ? a : b'] },
    ],
    resources: ['CS50 (Harvard) – semanas 1 e 2', 'Beej\'s Guide to C Programming', 'The C Programming Language (K&R)', 'GCC Online Docs'],
    tip: 'Escreva e compile todo exemplo. Use gcc -Wall -Wextra para ver todos os warnings desde o início — eles ensinam mais do que parecem.'
  },
  {
    num: 2, badge: 'badge-purple', label: 'Controle de Fluxo',
    title: 'Condicionais e loops', duration: '1 semana',
    topics: [
      'if / else if / else com condições compostas',
      'switch / case / default e fall-through',
      'Loop for com índice e passo personalizado',
      'Loop while: condição avaliada antes',
      'Loop do-while: corpo executa ao menos uma vez',
      'break para sair do loop, continue para pular iteração',
      'Loops aninhados e cuidado com complexidade O(n²)',
      'Uso de goto (quando existe e por que evitar)',
    ],
    resources: ['CS50 – semana 2', 'Programiz C Tutorial', 'GeeksforGeeks – C Control Flow'],
    tip: 'Implemente a tabuada, FizzBuzz e o triângulo de asteriscos com for aninhado. São exercícios clássicos que consolidam os loops.'
  },
  {
    num: 3, badge: 'badge-teal', label: 'Funções',
    title: 'Modularização e recursão', duration: '1–2 semanas',
    groups: [
      { label: 'Declaração e Chamada', items: ['Sintaxe: tipo nome(parâmetros) { corpo }','Declaração (protótipo) vs definição: por que declarar antes do main','Passagem por valor: a função recebe uma cópia','void como tipo de retorno e como lista de parâmetros (void foo(void))','Funções que retornam múltiplos valores via ponteiros'] },
      { label: 'Escopo e Duração', items: ['Variáveis locais: existem apenas dentro do bloco','Variáveis globais: quando usar (e quando evitar)','Variáveis static locais: persistem entre chamadas','Modificador extern para compartilhar entre arquivos'] },
      { label: 'Recursão', items: ['O que é recursão e a pilha de chamadas','Caso base obrigatório para evitar stack overflow','Fatorial, Fibonacci e Soma de Dígitos como exemplos','Recursão vs iteração: tradeoffs de legibilidade e performance','Tail recursion: conceito e suporte em C'] },
    ],
    resources: ['CS50 – semana 3', 'Beej\'s Guide – Functions', 'Exercício: implementar stdlib sort manualmente'],
    tip: 'Antes de usar recursão, desenhe a árvore de chamadas no papel. Visualizar a pilha é o que faz o conceito "clicar".'
  },
  {
    num: 4, badge: 'badge-amber', label: 'Arrays e Strings',
    title: 'Vetores e manipulação de texto', duration: '1–2 semanas',
    groups: [
      { label: 'Arrays', items: ['Declaração: int v[10]; e inicialização: int v[] = {1,2,3}','Acesso por índice (base zero) e limites: C não verifica bounds','Passagem de array para função (decai para ponteiro)','Arrays multidimensionais: int mat[3][3]','Percorrendo com for e com sizeof(v)/sizeof(v[0])'] },
      { label: 'Strings em C', items: ['String = array de char terminado em \\0 (null terminator)','Declaração: char nome[50] e char *nome = "literal"','strlen(), strcpy(), strcat(), strcmp() da <string.h>','strncpy() e strncat() para evitar buffer overflow','Conversão: atoi(), atof(), strtol() da <stdlib.h>','Tokenização com strtok()'] },
    ],
    resources: ['CS50 – semana 2 (arrays)', 'Beej\'s Guide – Arrays & Strings', 'cppreference.com – string.h'],
    tip: 'Nunca use gets(). Prefira fgets(buf, sizeof(buf), stdin). Um buffer overflow em string é a vulnerabilidade mais clássica de C.'
  },
  {
    num: 5, badge: 'badge-coral', label: 'Ponteiros',
    title: 'Endereços de memória e indireção', duration: '2–3 semanas',
    groups: [
      { label: 'Fundamentos', items: ['O que é um ponteiro: variável que armazena endereço','Operador & (endereço de) e * (indireção/derreferência)','Declaração: int *p; e atribuição: p = &x;','Ponteiro NULL e por que checar antes de derreferenciar','Tamanho de ponteiros: 4 ou 8 bytes dependendo da arquitetura'] },
      { label: 'Ponteiros e Funções', items: ['Passagem por referência simulada com ponteiros','Funções que modificam o original: swap(int *a, int *b)','Ponteiro para ponteiro (int **pp)','Retornando ponteiros de funções (cuidado com variáveis locais)'] },
      { label: 'Aritmética de Ponteiros', items: ['p + 1 avança sizeof(*p) bytes, não 1 byte','Diferença entre ponteiros: p2 - p1 (em elementos, não bytes)','Array e ponteiro: v[i] == *(v + i)','Iterando array com ponteiro: while (p < v + n)'] },
      { label: 'Alocação Dinâmica', items: ['malloc(n * sizeof(int)) e verificar retorno != NULL','calloc() para inicializar com zero','realloc() para redimensionar','free() obrigatório para cada malloc — valgrind para detectar leaks','Dangling pointer: nunca usar ponteiro após free()'] },
    ],
    resources: ['CS50 – semana 4', 'Beej\'s Guide – Pointers', 'Valgrind (ferramenta de detecção de memory leaks)'],
    tip: 'Ponteiros são o tópico que mais "trava" iniciantes em C. Dedique pelo menos 3 dias só a este capítulo e use o Pythontutor.com para visualizar a memória.'
  },
  {
    num: 6, badge: 'badge-green', label: 'Structs e Arquivos',
    title: 'Tipos compostos e I/O de arquivos', duration: '1–2 semanas',
    groups: [
      { label: 'Structs', items: ['Definição: struct Ponto { int x; int y; };','Typedef para alias: typedef struct { ... } Ponto;','Acesso por valor (.) e por ponteiro (->)','Passagem de struct para função por valor vs por ponteiro','Array de structs e alocação dinâmica de structs'] },
      { label: 'Arquivos', items: ['fopen() com modos "r", "w", "a", "rb", "wb"','fclose() obrigatório — flushes o buffer','fprintf() e fscanf() análogos ao printf/scanf','fgets() para leitura linha a linha','fread() e fwrite() para I/O binário','fseek(), ftell() e rewind() para navegar no arquivo','Verificar EOF com feof() e erros com ferror()'] },
    ],
    resources: ['CS50 – semana 5 (structs)', 'Beej\'s Guide – File I/O', 'cppreference.com – stdio.h'],
    tip: 'Sempre feche arquivos com fclose() e sempre cheque se fopen() retornou NULL. Arquivos não fechados causam dados corrompidos.'
  },
  {
    num: 7, badge: 'badge-indigo', label: 'Mini Projeto',
    title: 'Programa completo em C', duration: '1–2 semanas',
    groups: [
      { label: 'Escolha do Projeto', items: ['Agenda de contatos: CRUD usando array de structs','Calculadora RPN (notação polonesa reversa) com pilha','Jogo da Forca no terminal','Gerenciador de tarefas com persistência em arquivo .txt','Mini banco: contas com saldo, depósito, saque e extrato em arquivo'] },
      { label: 'Boas Práticas', items: ['Separar em múltiplos .c e .h usando #include guards','Makefile simples para compilar o projeto inteiro','Usar const onde os dados não mudam','Evitar variáveis globais — passar por parâmetro','Validar todas as entradas do usuário antes de usar'] },
      { label: 'Qualidade', items: ['Rodar com valgrind --leak-check=full e zerar os leaks','Compilar com -Wall -Wextra -pedantic sem warnings','Escrever um README com instruções de compilação e uso'] },
    ],
    resources: ['Makefile Tutorial (makefile.site)', 'Valgrind Quick Start', 'CS50 – Problem Sets como inspiração'],
    tip: 'O projeto consolida tudo: structs, ponteiros, arquivos e modularização. Escolha um tema que te motive — vai passar horas depurando e é muito mais fácil com algo interessante.'
  },
];
