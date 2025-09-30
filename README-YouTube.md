# YouTube Clone - Homepage

Uma aplicação web que replica a interface do YouTube com funcionalidades modernas e responsivas.

## 🚀 Funcionalidades

### ✨ Principais
- **Exibição de Vídeos**: Grid responsivo com miniaturas de vídeos fictícios
- **Categorias**: Sidebar com filtros por categoria (Música, Tecnologia, Entretenimento, Esportes, Educação)
- **Modal de Preview**: Visualização detalhada dos vídeos com título, descrição e informações do canal
- **Persistência**: Local Storage para salvar preferências de categoria e estado do modal

### 🎨 Design
- Interface limpa e moderna usando **Tailwind CSS**
- Layout responsivo (mobile-first)
- Ícones do **Lucide React** para melhor UX
- Animações suaves e transições
- Sidebar fixa com navegação intuitiva

### 📱 Responsividade
- **Desktop**: Layout completo com sidebar fixa
- **Tablet**: Grid adaptativo com sidebar colapsável
- **Mobile**: Interface otimizada com menu hambúrguer

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos personalizados + Tailwind CSS
- **JavaScript ES6+**: Lógica da aplicação
- **Local Storage**: Persistência de dados
- **Lucide Icons**: Ícones modernos

## 📁 Estrutura de Arquivos

```
projeto-barbearia2/
├── youtube-homepage.html    # Página principal
├── youtube-app.js          # Lógica da aplicação
├── youtube-styles.css      # Estilos personalizados
└── README-YouTube.md       # Documentação
```

## 🚀 Como Usar

1. **Abrir a Aplicação**:
   - Abra o arquivo `youtube-homepage.html` em qualquer navegador moderno

2. **Navegar por Categorias**:
   - Use a sidebar à esquerda para filtrar vídeos por categoria
   - No mobile, clique no ícone de menu (☰) para abrir a sidebar

3. **Visualizar Vídeos**:
   - Clique em qualquer miniatura para abrir o modal com detalhes
   - Use o botão X ou clique fora do modal para fechar
   - Pressione ESC para fechar o modal

4. **Persistência**:
   - Sua categoria selecionada é salva automaticamente
   - O estado do modal é preservado ao recarregar a página

## 🎯 Funcionalidades Detalhadas

### Sistema de Categorias
- **Todos**: Exibe todos os vídeos disponíveis
- **Música**: Vídeos relacionados a música e instrumentos
- **Tecnologia**: Reviews e tutoriais de tecnologia
- **Entretenimento**: Filmes, séries e comédia
- **Esportes**: Conteúdo esportivo e highlights
- **Educação**: Cursos e conteúdo educativo

### Modal de Vídeo
- Título completo do vídeo
- Imagem em alta resolução
- Informações do canal (nome e inicial)
- Número de visualizações
- Descrição detalhada
- Design responsivo

### Local Storage
- `selectedCategory`: Categoria ativa selecionada
- `modalState`: Estado do modal (aberto/fechado e ID do vídeo)

## 🎨 Personalização

### Adicionar Novos Vídeos
Edite o array `videosData` em `youtube-app.js`:

```javascript
{
    id: 13,
    title: "Seu Título Aqui",
    thumbnail: "URL_DA_IMAGEM",
    category: "categoria",
    channel: "Nome do Canal",
    channelInitial: "N",
    views: "1M visualizações",
    description: "Descrição do vídeo..."
}
```

### Adicionar Novas Categorias
1. Adicione o botão na sidebar (HTML)
2. Inclua a categoria no sistema de filtros (JS)
3. Adicione vídeos com a nova categoria

### Personalizar Estilos
- Modifique `youtube-styles.css` para estilos personalizados
- Use classes do Tailwind CSS no HTML
- Ajuste cores e animações conforme necessário

## 🔧 Requisitos

- Navegador moderno com suporte a ES6+
- Conexão com internet (para CDNs do Tailwind e Lucide)
- JavaScript habilitado

## 📱 Compatibilidade

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móveis (iOS/Android)

## 🚀 Melhorias Futuras

- [ ] Sistema de busca funcional
- [ ] Player de vídeo integrado
- [ ] Sistema de likes/dislikes
- [ ] Comentários nos vídeos
- [ ] Playlists personalizadas
- [ ] Modo escuro/claro
- [ ] Notificações push

---

**Desenvolvido com ❤️ usando tecnologias web modernas**