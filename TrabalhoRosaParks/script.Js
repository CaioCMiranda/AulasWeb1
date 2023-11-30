document.addEventListener('DOMContentLoaded', function () {
    var moreParagraph = document.getElementById('more-paragraph');
    var toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', function () {
        moreParagraph.classList.toggle('hidden');
    });

    var menuItems = document.querySelectorAll('#menu ul li a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('mouseover', function () {
            this.style.backgroundColor = 'rgb(97, 92, 92)';
        });

        menuItem.addEventListener('mouseout', function () {
            this.style.backgroundColor = '';
        });
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Obtendo referências às imagens
    var image1 = document.querySelector('img[src="https://tse4.mm.bing.net/th?id=OIP.wNhHKQ89CAw8MOSho8g_MQHaE8&pid=Api&P=0&h=180"]');
    var image2 = document.querySelector('img[src="https://tse1.mm.bing.net/th?id=OIP.gdHAJLZkLL-IVsVY7aNRMQHaE3&pid=Api&P=0&h=180"]');
    var image3 = document.querySelector('img[src="https://upload.wikimedia.org/wikipedia/commons/2/23/Rosa_Parks_Bus.jpg"]');
    var image4 = document.querySelector('img[src="https://tse2.mm.bing.net/th?id=OIP.GKf9N5d9apxH45LjsO2SXwHaF-&pid=Api&P=0&h=180"]');

    // Adicionando ouvinte de evento para a imagem 1
    image1.addEventListener('mouseover', function () {
        image1.src = 'https://www.shutterstock.com/image-vector/vector-illustration-rosa-parks-260nw-2311615637.jpg'; // Substitua 'nova-url-da-imagem-1.jpg' pela nova URL da imagem
    });

    // Adicionando ouvinte de evento para a imagem 2
    image2.addEventListener('mouseover', function () {
        image2.src = 'https://www.shutterstock.com/image-vector/vector-illustration-rosa-parks-260nw-2311714221.jpg'; 
    });

    // Adicionando ouvinte de evento para a imagem 3
    image3.addEventListener('mouseover', function () {
        image3.src = 'https://www.shutterstock.com/image-vector/vector-illustration-rosa-parks-260nw-2311800123.jpg'; 
    });

    // Adicionando ouvinte de evento para a imagem 4
    image4.addEventListener('mouseover', function () {
        image4.src = 'https://www.shutterstock.com/image-vector/vector-illustration-rosa-parks-260nw-2311800119.jpg'; 
    });

    // Restaurando as imagens quando o mouse sai
    image1.addEventListener('mouseout', function () {
        image1.src = 'https://tse4.mm.bing.net/th?id=OIP.wNhHKQ89CAw8MOSho8g_MQHaE8&pid=Api&P=0&h=180';
    });

    image2.addEventListener('mouseout', function () {
        image2.src = 'https://tse1.mm.bing.net/th?id=OIP.gdHAJLZkLL-IVsVY7aNRMQHaE3&pid=Api&P=0&h=180';
    });

    image3.addEventListener('mouseout', function () {
        image3.src = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Rosa_Parks_Bus.jpg';
    });

    image4.addEventListener('mouseout', function () {
        image4.src = 'https://tse2.mm.bing.net/th?id=OIP.GKf9N5d9apxH45LjsO2SXwHaF-&pid=Api&P=0&h=180';
    });
});

