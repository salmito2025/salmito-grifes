// Produtos e categorias
const categories = [
    { name: 'Tênis', id: 'tênis' },
    { name: 'Calças', id: 'calcas' },
    { name: 'Shorts', id: 'shorts' },
    { name: 'Coecas', id: 'coecas' },
    { name: 'Camisas', id: 'camisas' },
    { name: 'Jaquetas', id: 'jaquetas' },
    { name: 'Moletons', id: 'moletons' },
    { name: 'Bonés', id: 'bones' },
    { name: 'Todos os Produtos', id: 'todos' }
];

const products = [
        // Categoria Tênis
        { name: 'Tênis 1', price: 'R$ 179,99', category: 'tênis', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 2', price: 'R$ 159,99', category: 'tênis', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 3', price: 'R$ 189,99', category: 'tênis', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 4', price: 'R$ 199,99', category: 'tênis', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 5', price: 'R$ 209,99', category: 'tênis', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 6', price: 'R$ 229,99', category: 'tênis', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 7', price: 'R$ 239,99', category: 'tênis', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 8', price: 'R$ 249,99', category: 'tênis', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 9', price: 'R$ 259,99', category: 'tênis', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 10', price: 'R$ 269,99', category: 'tênis', imgSrc: 'imagens/img1.jpeg' },
    
        // Categoria Calças
        { name: 'Calça 1', price: 'R$ 149,99', category: 'calças', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 2', price: 'R$ 159,99', category: 'calças', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 3', price: 'R$ 169,99', category: 'calças', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 4', price: 'R$ 179,99', category: 'calças', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 5', price: 'R$ 189,99', category: 'calças', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 6', price: 'R$ 199,99', category: 'calças', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 7', price: 'R$ 209,99', category: 'calças', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 8', price: 'R$ 219,99', category: 'calças', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 9', price: 'R$ 229,99', category: 'calças', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 10', price: 'R$ 239,99', category: 'calças', imgSrc: 'imagens/img1.jpeg' },
    
        // Categoria Shorts
        { name: 'Shorts 1', price: 'R$ 79,99', category: 'shorts', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 2', price: 'R$ 89,99', category: 'shorts', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 3', price: 'R$ 99,99', category: 'shorts', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 4', price: 'R$ 109,99', category: 'shorts', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 5', price: 'R$ 119,99', category: 'shorts', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 6', price: 'R$ 129,99', category: 'shorts', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 7', price: 'R$ 139,99', category: 'shorts', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 8', price: 'R$ 149,99', category: 'shorts', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 9', price: 'R$ 159,99', category: 'shorts', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 10', price: 'R$ 169,99', category: 'shorts', imgSrc: 'imagens/img1.jpeg' },
    
        // Categoria Coecas
        { name: 'Coeca 1', price: 'R$ 29,99', category: 'coecas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 2', price: 'R$ 39,99', category: 'coecas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 3', price: 'R$ 49,99', category: 'coecas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 4', price: 'R$ 59,99', category: 'coecas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 5', price: 'R$ 69,99', category: 'coecas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 6', price: 'R$ 79,99', category: 'coecas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 7', price: 'R$ 89,99', category: 'coecas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 8', price: 'R$ 99,99', category: 'coecas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 9', price: 'R$ 109,99', category: 'coecas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 10', price: 'R$ 119,99', category: 'coecas', imgSrc: 'imagens/img1.jpeg' },
    
        // Categoria Camisas
        { name: 'Camisa 1', price: 'R$ 59,99', category: 'camisas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 2', price: 'R$ 69,99', category: 'camisas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 3', price: 'R$ 79,99', category: 'camisas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 4', price: 'R$ 89,99', category: 'camisas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 5', price: 'R$ 99,99', category: 'camisas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 6', price: 'R$ 109,99', category: 'camisas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 7', price: 'R$ 119,99', category: 'camisas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 8', price: 'R$ 129,99', category: 'camisas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 9', price: 'R$ 139,99', category: 'camisas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 10', price: 'R$ 149,99', category: 'camisas', imgSrc: 'imagens/img1.jpeg' },
    
        // Categoria Jaquetas
        { name: 'Jaqueta 1', price: 'R$ 219,99', category: 'jaquetas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 2', price: 'R$ 229,99', category: 'jaquetas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 3', price: 'R$ 239,99', category: 'jaquetas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 4', price: 'R$ 249,99', category: 'jaquetas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 5', price: 'R$ 259,99', category: 'jaquetas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 6', price: 'R$ 269,99', category: 'jaquetas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 7', price: 'R$ 279,99', category: 'jaquetas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 8', price: 'R$ 289,99', category: 'jaquetas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 9', price: 'R$ 299,99', category: 'jaquetas', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 10', price: 'R$ 309,99', category: 'jaquetas', imgSrc: 'imagens/img1.jpeg' },
    
        // Categoria Moletons
        { name: 'Moletom 1', price: 'R$ 199,99', category: 'moletons', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 2', price: 'R$ 209,99', category: 'moletons', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 3', price: 'R$ 219,99', category: 'moletons', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 4', price: 'R$ 229,99', category: 'moletons', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 5', price: 'R$ 239,99', category: 'moletons', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 6', price: 'R$ 249,99', category: 'moletons', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 7', price: 'R$ 259,99', category: 'moletons', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 8', price: 'R$ 269,99', category: 'moletons', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 9', price: 'R$ 279,99', category: 'moletons', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 10', price: 'R$ 289,99', category: 'moletons', imgSrc: 'imagens/img1.jpeg' },
    
        // Categoria Bonés
        { name: 'Boné 1', price: 'R$ 39,99', category: 'bonés', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 2', price: 'R$ 49,99', category: 'bonés', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 3', price: 'R$ 59,99', category: 'bonés', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 4', price: 'R$ 69,99', category: 'bonés', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 5', price: 'R$ 79,99', category: 'bonés', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 6', price: 'R$ 89,99', category: 'bonés', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 7', price: 'R$ 99,99', category: 'bonés', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 8', price: 'R$ 109,99', category: 'bonés', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 9', price: 'R$ 119,99', category: 'bonés', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 10', price: 'R$ 129,99', category: 'bonés', imgSrc: 'imagens/img1.jpeg' },
    ];
    
    const todosOsProdutos = [
        { name: 'Tênis 1', price: 'R$ 179,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 2', price: 'R$ 159,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 3', price: 'R$ 189,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 4', price: 'R$ 199,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 5', price: 'R$ 209,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 6', price: 'R$ 229,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 7', price: 'R$ 239,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 8', price: 'R$ 249,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 9', price: 'R$ 259,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Tênis 10', price: 'R$ 269,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
    
        { name: 'Calça 1', price: 'R$ 149,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 2', price: 'R$ 159,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 3', price: 'R$ 169,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 4', price: 'R$ 179,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 5', price: 'R$ 189,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 6', price: 'R$ 199,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 7', price: 'R$ 209,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 8', price: 'R$ 219,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 9', price: 'R$ 229,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Calça 10', price: 'R$ 239,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
    
        { name: 'Shorts 1', price: 'R$ 79,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 2', price: 'R$ 89,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 3', price: 'R$ 99,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 4', price: 'R$ 109,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 5', price: 'R$ 119,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 6', price: 'R$ 129,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 7', price: 'R$ 139,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 8', price: 'R$ 149,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 9', price: 'R$ 159,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Shorts 10', price: 'R$ 169,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
    
        { name: 'Coeca 1', price: 'R$ 29,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 2', price: 'R$ 39,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 3', price: 'R$ 49,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 4', price: 'R$ 59,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 5', price: 'R$ 69,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 6', price: 'R$ 79,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 7', price: 'R$ 89,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 8', price: 'R$ 99,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 9', price: 'R$ 109,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Coeca 10', price: 'R$ 119,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
    
        { name: 'Camisa 1', price: 'R$ 59,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 2', price: 'R$ 69,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 3', price: 'R$ 79,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 4', price: 'R$ 89,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 5', price: 'R$ 99,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 6', price: 'R$ 109,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 7', price: 'R$ 119,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 8', price: 'R$ 129,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 9', price: 'R$ 139,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Camisa 10', price: 'R$ 149,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
    
        { name: 'Jaqueta 1', price: 'R$ 219,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 2', price: 'R$ 229,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 3', price: 'R$ 239,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 4', price: 'R$ 249,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 5', price: 'R$ 259,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 6', price: 'R$ 269,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 7', price: 'R$ 279,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 8', price: 'R$ 289,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 9', price: 'R$ 299,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Jaqueta 10', price: 'R$ 309,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
    
        { name: 'Moletom 1', price: 'R$ 199,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 2', price: 'R$ 209,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 3', price: 'R$ 219,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 4', price: 'R$ 229,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 5', price: 'R$ 239,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 6', price: 'R$ 249,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 7', price: 'R$ 259,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 8', price: 'R$ 269,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 9', price: 'R$ 279,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Moletom 10', price: 'R$ 289,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
    
        { name: 'Boné 1', price: 'R$ 39,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 2', price: 'R$ 49,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 3', price: 'R$ 59,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 4', price: 'R$ 69,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 5', price: 'R$ 79,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 6', price: 'R$ 89,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
        { name: 'Boné 7', price: 'R$ 99,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
            { name: 'Boné 8', price: 'R$ 109,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
            { name: 'Boné 9', price: 'R$ 119,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
            { name: 'Boné 10', price: 'R$ 129,99', category: 'todos', imgSrc: 'imagens/img1.jpeg' },
            // Adicione aqui outros produtos
        ];
        
        document.addEventListener('DOMContentLoaded', () => {
            const productGrid = document.querySelector('.product-grid');
        
            // Função para exibir produtos com base na categoria selecionada
            function showProducts(category) {
                productGrid.innerHTML = ''; // Limpa a grid de produtos
                const filteredProducts = category === 'todos' ? products : products.filter(product => product.category === category);
        
                filteredProducts.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product');
                    productElement.innerHTML = `
                        <img src="${product.imgSrc}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                    `;
                    productGrid.appendChild(productElement);
                });
        
                // Mostrar animação
                const productsToShow = document.querySelectorAll('.product');
                productsToShow.forEach((product, index) => {
                    setTimeout(() => {
                        product.classList.add('show');
                    }, 100 * index);
                });
            }
        
            // Inicializa com todos os produtos
            showProducts('todos');
        
            // Filtro de categorias
            const filterButtons = document.querySelectorAll('.filter-button');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.getAttribute('data-category');
                    showProducts(category); // Filtra os produtos pela categoria
                });
            });
        
            // Lógica do modal
            productGrid.addEventListener('click', (e) => {
                const productElement = e.target.closest('.product');
                if (!productElement) return;
        
                const title = productElement.querySelector('h3').textContent;
                const price = productElement.querySelector('p').textContent;
                const modal = document.querySelector('#productModal');
                const modalTitle = document.querySelector('#modalTitle');
                const modalPrice = document.querySelector('#modalPrice');
                const whatsappLink = document.querySelector('#whatsappLink');
        
                modal.style.display = 'flex';
                modalTitle.textContent = title;
                modalPrice.textContent = price;
        
                // Configura o link do WhatsApp
                const productPrice = price.replace('R$', '').trim().replace(',', '.');
                const message = `Olá, gostaria de saber mais sobre o produto: ${title}, que custa R$ ${productPrice}.`;
                whatsappLink.href = `https://wa.me/+5588981073510?text=${encodeURIComponent(message)}`;
            });
        
            // Fechar modal
            document.querySelector('#modal-close').addEventListener('click', () => {
                document.querySelector('#productModal').style.display = 'none';
            });
        
            // Lógica para mostrar/ocultar a sidebar de filtros
            const toggleFilterButton = document.getElementById('toggleFilterButton');
            const sidebar = document.querySelector('.sidebar');
            
            // Adiciona o evento de clique no botão para mostrar/ocultar a sidebar
            toggleFilterButton.addEventListener('click', () => {
                sidebar.classList.toggle('show'); // Alterna a classe 'show'
                
                // Altera o texto do botão conforme a visibilidade da sidebar
                if (sidebar.classList.contains('show')) {
                    toggleFilterButton.textContent = 'Ocultar Filtro';
                } else {
                    toggleFilterButton.textContent = 'Mostrar Filtro';
                }
            });
        });
        