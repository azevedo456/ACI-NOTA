// Função para carregar o mapa com Leaflet.js
function carregarMapa() {
    // Latitude e Longitude do endereço da loja
    const lojaLatitude = -22.9000;  // Latitude de exemplo para a localização da loja
    const lojaLongitude = -43.2095; // Longitude de exemplo para a localização da loja

    // Criar o mapa no contêiner com id "map"
    const map = L.map('map').setView([lojaLatitude, lojaLongitude], 15);

    // Adicionar o tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Adicionar um marcador no mapa
    L.marker([lojaLatitude, lojaLongitude])
        .addTo(map)
        .bindPopup("Minha Loja Virtual")
        .openPopup();
}

// Chamar a função para carregar o mapa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    carregarMapa();
});
