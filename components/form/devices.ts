const deviceOptions = [
  {
    label: "Máquina de Lavar Roupa",
    value: "Máquina de Lavar Roupa",
    description: "Usada para lavar roupas",
    potencia: 800,
    compartments: ["dependencia", "areaExterna"],
  },
  {
    label: "Máquina de Secar Roupa",
    value: "Máquina de Secar Roupa",
    description: "Usada para secar roupas",
    potencia: 2100,
    compartments: ["dependencia", "areaExterna"],
  },
  
  {
    label: "Forno de Micro-ondas",
    value: "Forno de Micro-ondas",
    description: "Aquece e cozinha alimentos rapidamente",
    potencia: 1000,
    compartments: ["cozinha"],
  },
  {
    label: "Televisão",
    value: "Televisão",
    description: "Exibe conteúdo audiovisual",
    potencia: 150,
    compartments: ["sala", "quarto"],
  },
  {
    label: "Consola",
    value: "Consola",
    description: "Exibe conteúdo audiovisual",
    potencia: 350,
    compartments: ["sala", "quarto"],
  },
  {
    label: "Projector",
    value: "Projector",
    description: "Exibe conteúdo audiovisual",
    potencia: 300,
    compartments: ["sala", "quarto"],
  },
  {
    label: "Home Theater",
    value: "Home Theater",
    description: "Exibe conteúdo audiovisual",
    potencia: 400,
    compartments: ["sala", "quarto"],
  },
  {
    label: "Coluna",
    value: "Coluna",
    description: "Exibe conteúdo audio",
    potencia: 50,
    compartments: ["sala", "quarto"],
  },
  {
    label: "TV Cabo",
    value: "TV Cabo",
    description: "Exibe conteúdo audiovisual",
    potencia: 150,
    compartments: ["sala", "quarto"],
  },
  {
    label: "Ar Condicionado",
    value: "Ar Condicionado",
    description: "Controla a temperatura e umidade internas",
    potencia: 1200,
    compartments: ["sala", "quarto", "escritorio"],
  },
  {
    label: "Máquina de café",
    value: "Máquina de café",
    description: "Prepara café ou outras bebidas quentes",
    potencia: 1000,
    compartments: ["cozinha"],
  },
  {
    label: "Aspirador de Pó",
    value: "Aspirador de Pó",
    description: "Limpa pisos e carpetes",
    potencia: 1200,
    compartments: ["dependencia"],
  },
  {
    label: "Liquidificador",
    value: "Liquidificador",
    description: "Mistura e processa ingredientes de alimentos",
    potencia: 300,
    compartments: ["cozinha"],
  },
  {
    label: "Ventilador",
    value: "Ventilador",
    description: "Circula o ar e proporciona ventilação",
    potencia: 70,
    compartments: ["sala", "quarto"],
  },
  {
    label: "Ferro de Engomar",
    value: "Ferro de Engomar",
    description: "Alisa as rugas de tecidos",
    potencia: 1100,
    compartments: ["dependencia"],
  },
  {
    label: "Forno",
    value: "Forno",
    description: "Assa e cozinha alimentos",
    potencia: 2000,
    compartments: ["cozinha"],
  },
  
  {
    label: "Cafeteira",
    value: "Cafeteira",
    description: "Cafeteira",
    potencia: 750,
    compartments: ["cozinha"],
  },

  {
    label: "Rice Cooker",
    value: "Rice Cooker",
    description: "Rice Cooker",
    potencia: 400,
    compartments: ["cozinha"],
  },

  {
    label: "Computador Desktop",
    value: "Computador Desktop",
    description: "Um computador pessoal de mesa",
    potencia: 150,
    compartments: ["quarto", "escritorio"],
  },
  {
    label: "Laptop",
    value: "Laptop",
    description: "Um computador portátil",
    potencia: 65,
    compartments: ["escritorio"],
  },
  {
    label: "Carregador de Celular",
    value: "Carregador de Celular",
    description: "Carrega a bateria de dispositivos móveis",
    potencia: 5,
    compartments: ["sala", "quarto", "escritorio"],
  },
  {
    label: "Secador de Cabelo",
    value: "Secador de Cabelo",
    description: "Seca cabelos molhados",
    potencia: 1500,
    compartments: ["casaDeBanho"],
  },

  {
    label: "Prancha",
    value: "Prancha",
    description: "Pranchas",
    potencia: 120,
    compartments: ["casaDeBanho"],
  },

  {
    label: "Termo acumulador",
    value: "Termo acumulador",
    description: "Termo acumulador",
    potencia: 4000,
    compartments: ["casaDeBanho"],
  },

  {
    label: "Máquina de barbear",
    value: "Máquina de barbear",
    description: "Máquina de barbear",
    potencia: 30,
    compartments: ["casaDeBanho"],
  },

  {
    label: "Chuveiro Eléctrico",
    value: "Chuveiro Eléctrico",
    description: "Chuveiro Eléctrico",
    potencia: 7500,
    compartments: ["casaDeBanho"],
  },

  {
    label: "Impressora",
    value: "Impressora",
    description: "Imprime documentos e imagens",
    potencia: 250,
    compartments: ["escritorio"],
  },
  {
    label: "Micro-ondas",
    value: "Micro-ondas",
    description: "Aquece e cozinha alimentos",
    potencia: 800,
    compartments: ["cozinha"],
  },
  {
    label: "Carregador de Laptop",
    value: "Carregador de Laptop",
    description: "Carrega a bateria de laptops",
    potencia: 60,
    compartments: ["quarto","escritorio"],
  },
  {
    label: "Aparelho de Som",
    value: "Aparelho de Som",
    description: "Reproduz música e áudio",
    potencia: 50,
    compartments: ["sala", "quarto"],
  },
  {
    label: "Aquecedor Elétrico",
    value: "Aquecedor Elétrico",
    description: "Aquece ambientes",
    potencia: 1500,
    compartments: ["sala", "quarto"],
  },
  {
    label: "Chaleira Elétrica",
    value: "Chaleira Elétrica",
    description: "Ferve água rapidamente",
    potencia: 1500,
    compartments: ["cozinha"],
  },
  {
    label: "Desumidificador",
    value: "Desumidificador",
    description: "Remove a umidade do ar",
    potencia: 300,
    compartments: ["sala", "quarto"],
  },
  {
    label: "Iluminação",
    value: "Iluminação",
    description: "Iluminação",
    potencia: 60,
    compartments: ["sala", "quarto", "cozinha", "casaDeBanho", "escritorio", "dependencia", "garagem", "areaExterna"]
  },

  {
    label: "Alarme",
    value: "Alarme",
    description: "Alarme",
    potencia: 7,
    compartments: ["sala", "garagem"]
  },

  {
    label: "Câmera",
    value: "Câmera",
    description: "Câmera",
    potencia: 12,
    compartments: ["sala", "garagem"]
  },

  {
    label: "Modem",
    value: "Modem",
    description: "Modem",
    potencia: 10,
    compartments: ["sala", "quarto", "escritorio"]
  },

  {
    label: "Carregador de telemóvel",
    value: "Carregador de telemóvel",
    description: "Carregador de telemóvel",
    potencia: 20,
    compartments: ["sala", "quarto", "escritorio"]
  },

  {
    label: "Motobomba",
    value: "Motobomba",
    description: "Motobomba",
    potencia: 150,
    compartments: ["areaExterna"],
  },

  {
    label: "Churrasqueira",
    value: "Churrasqueira",
    description: "Churrasqueira",
    potencia: 800,
    compartments: ["areaExterna"],
  },

  {
    label: "Cortador de grama",
    value: "Cortador de grama",
    description: "Cortador de grama",
    potencia: 1000,
    compartments: ["areaExterna"],
  },

  {
    label: "Outros",
    value: "outros",
    description: "Outros",
    potencia: 0,
    compartments: ["sala", "quarto", "cozinha", "casaDeBanho", "escritorio", "dependencia", "garagem", "areaExterna"]
  },
      
  ];
  
  export default deviceOptions;