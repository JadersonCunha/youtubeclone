// Dados fictícios dos vídeos
const videosData = [
    {
        id: 1,
        title: "Como Tocar Violão - Aula Completa para Iniciantes",
        thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop",
        category: "musica",
        channel: "MusicMaster",
        channelInitial: "M",
        views: "1.2M visualizações",
        description: "Aprenda a tocar violão do zero com esta aula completa. Cobrimos desde como segurar o instrumento até tocar suas primeiras músicas. Perfeito para iniciantes que querem começar sua jornada musical."
    },
    {
        id: 2,
        title: "iPhone 15 Pro Max - Review Completo",
        thumbnail: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=225&fit=crop",
        category: "tecnologia",
        channel: "TechReview",
        channelInitial: "T",
        views: "850K visualizações",
        description: "Análise completa do novo iPhone 15 Pro Max. Testamos câmera, performance, bateria e todas as novidades. Vale a pena o upgrade? Descubra neste review detalhado."
    },
    {
        id: 3,
        title: "Os Melhores Filmes de 2024 - Top 10",
        thumbnail: "https://images.unsplash.com/photo-1489599904472-af35ff2c7c3f?w=400&h=225&fit=crop",
        category: "entretenimento",
        channel: "CineClub",
        channelInitial: "C",
        views: "2.1M visualizações",
        description: "Nossa seleção dos 10 melhores filmes lançados em 2024. De blockbusters a filmes independentes, confira nossa lista com análises e trailers exclusivos."
    },
    {
        id: 4,
        title: "Gols Mais Bonitos da Copa do Mundo",
        thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=225&fit=crop",
        category: "esportes",
        channel: "FutebolBR",
        channelInitial: "F",
        views: "3.5M visualizações",
        description: "Relembre os gols mais espetaculares da história das Copas do Mundo. Uma compilação emocionante dos momentos mais marcantes do futebol mundial."
    },
    {
        id: 5,
        title: "Curso de JavaScript - Aula 1: Variáveis",
        thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop",
        category: "educacao",
        channel: "CodeAcademy",
        channelInitial: "C",
        views: "920K visualizações",
        description: "Primeira aula do curso completo de JavaScript. Aprenda sobre variáveis, tipos de dados e como declarar suas primeiras variáveis em JS. Curso gratuito e completo."
    },
    {
        id: 6,
        title: "Top 10 Músicas Mais Tocadas 2024",
        thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop",
        category: "musica",
        channel: "HitsChart",
        channelInitial: "H",
        views: "4.2M visualizações",
        description: "As 10 músicas que dominaram as paradas em 2024. De pop a hip-hop, confira os maiores sucessos do ano com trechos e análises de cada hit."
    },
    {
        id: 7,
        title: "Como Montar um PC Gamer em 2024",
        thumbnail: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=225&fit=crop",
        category: "tecnologia",
        channel: "PCBuilder",
        channelInitial: "P",
        views: "1.8M visualizações",
        description: "Guia completo para montar seu PC gamer. Escolha de componentes, compatibilidade, montagem passo a passo e dicas para economizar sem perder performance."
    },
    {
        id: 8,
        title: "Stand-up Comedy - Os Melhores Momentos",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
        category: "entretenimento",
        channel: "ComedyClub",
        channelInitial: "C",
        views: "2.7M visualizações",
        description: "Uma compilação dos momentos mais engraçados do stand-up nacional. Risadas garantidas com os melhores comediantes do Brasil em apresentações inesquecíveis."
    },
    {
        id: 9,
        title: "Champions League - Melhores Jogadas",
        thumbnail: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=225&fit=crop",
        category: "esportes",
        channel: "EuroSport",
        channelInitial: "E",
        views: "5.1M visualizações",
        description: "As jogadas mais espetaculares da Champions League desta temporada. Dribles, gols e defesas que ficaram marcados na história da competição mais prestigiosa da Europa."
    },
    {
        id: 10,
        title: "Matemática Básica - Equações do 2º Grau",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop",
        category: "educacao",
        channel: "MathTeacher",
        channelInitial: "M",
        views: "680K visualizações",
        description: "Aprenda a resolver equações do segundo grau de forma simples e prática. Explicação passo a passo com exemplos e exercícios resolvidos para fixar o conteúdo."
    },
    {
        id: 11,
        title: "Piano Clássico - Chopin Nocturne",
        thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=225&fit=crop",
        category: "musica",
        channel: "ClassicalPiano",
        channelInitial: "C",
        views: "1.5M visualizações",
        description: "Performance ao vivo do Nocturne Op. 9 No. 2 de Chopin. Uma das peças mais belas do repertório clássico interpretada com maestria e sensibilidade."
    },
    {
        id: 12,
        title: "Inteligência Artificial - O Futuro Chegou",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop",
        category: "tecnologia",
        channel: "FutureTech",
        channelInitial: "F",
        views: "3.2M visualizações",
        description: "Explore o mundo da Inteligência Artificial e suas aplicações no dia a dia. Como a IA está transformando nossa sociedade e o que esperar do futuro próximo."
    }
];

// Estado da aplicação
let currentCategory = localStorage.getItem('selectedCategory') || 'all';
let isModalOpen = false;

// Elementos DOM
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menuBtn');
const videosGrid = document.getElementById('videosGrid');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const categoryBtns = document.querySelectorAll('.category-btn');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    loadVideos();
    setActiveCategory();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    menuBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', closeSidebar);
    closeModal.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideoModal();
    });
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            selectCategory(category);
        });
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isModalOpen) {
            closeVideoModal();
        }
    });
}

// Funções de navegação
function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

// Funções de categoria
function selectCategory(category) {
    currentCategory = category;
    localStorage.setItem('selectedCategory', category);
    setActiveCategory();
    loadVideos();
    closeSidebar();
}

function setActiveCategory() {
    categoryBtns.forEach(btn => {
        btn.classList.remove('bg-red-100', 'text-red-600');
        if (btn.dataset.category === currentCategory) {
            btn.classList.add('bg-red-100', 'text-red-600');
        }
    });
}

// Funções de vídeo
function loadVideos() {
    const filteredVideos = currentCategory === 'all' 
        ? videosData 
        : videosData.filter(video => video.category === currentCategory);
    
    videosGrid.innerHTML = filteredVideos.map(video => createVideoCard(video)).join('');
    
    // Adicionar event listeners aos cards
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const videoId = parseInt(card.dataset.videoId);
            openVideoModal(videoId);
        });
    });
}

function createVideoCard(video) {
    return `
        <div class="video-card cursor-pointer group" data-video-id="${video.id}">
            <div class="relative overflow-hidden rounded-lg mb-3">
                <img src="${video.thumbnail}" alt="${video.title}" 
                     class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200">
                <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    ${getRandomDuration()}
                </div>
            </div>
            <div class="flex space-x-3">
                <div class="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    ${video.channelInitial}
                </div>
                <div class="flex-1 min-w-0">
                    <h3 class="font-medium text-gray-900 line-clamp-2 text-sm leading-5 mb-1">
                        ${video.title}
                    </h3>
                    <p class="text-gray-600 text-xs mb-1">${video.channel}</p>
                    <p class="text-gray-600 text-xs">${video.views} • ${getRandomTime()}</p>
                </div>
            </div>
        </div>
    `;
}

// Funções do modal
function openVideoModal(videoId) {
    const video = videosData.find(v => v.id === videoId);
    if (!video) return;

    document.getElementById('modalTitle').textContent = video.title;
    document.getElementById('modalImage').src = video.thumbnail;
    document.getElementById('modalChannel').textContent = video.channelInitial;
    document.getElementById('modalChannelName').textContent = video.channel;
    document.getElementById('modalViews').textContent = video.views;
    document.getElementById('modalDescription').textContent = video.description;

    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    isModalOpen = true;

    // Salvar estado do modal no localStorage
    localStorage.setItem('modalState', JSON.stringify({
        isOpen: true,
        videoId: videoId
    }));
}

function closeVideoModal() {
    videoModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    isModalOpen = false;

    // Limpar estado do modal
    localStorage.removeItem('modalState');
}

// Funções utilitárias
function getRandomDuration() {
    const minutes = Math.floor(Math.random() * 20) + 1;
    const seconds = Math.floor(Math.random() * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function getRandomTime() {
    const times = ['há 1 hora', 'há 3 horas', 'há 1 dia', 'há 2 dias', 'há 1 semana', 'há 2 semanas', 'há 1 mês'];
    return times[Math.floor(Math.random() * times.length)];
}

// Restaurar estado do modal ao carregar a página
window.addEventListener('load', () => {
    const modalState = localStorage.getItem('modalState');
    if (modalState) {
        const { isOpen, videoId } = JSON.parse(modalState);
        if (isOpen && videoId) {
            setTimeout(() => openVideoModal(videoId), 100);
        }
    }
});

// Adicionar classe CSS para line-clamp
const style = document.createElement('style');
style.textContent = `
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
document.head.appendChild(style);