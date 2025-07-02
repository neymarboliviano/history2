document.addEventListener('DOMContentLoaded', function() {
    // Dados dos clubes
    const clubsData = {
        'palmeiras': {
            name: 'Sociedade Esportiva Palmeiras',
            nickname: 'O Verdão',
            logo: 'https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-0.png',
            history: 'Fundado em 26 de agosto de 1914 por imigrantes italianos como Palestra Italia, o Palmeiras é um dos clubes mais tradicionais do Brasil...',
            titles: [
                'Campeonato Brasileiro: 11 títulos (1960, 1967, 1967 (Taça Brasil), 1969, 1972, 1973, 1993, 1994, 2016, 2018, 2022)',
                'Copa do Brasil: 4 títulos (1998, 2012, 2015, 2020)',
                'Libertadores: 3 títulos (1999, 2020, 2021)',
                'Mundial de Clubes: 1 título (1951 - Copa Rio)',
                'Campeonato Paulista: 25 títulos'
            ],
            idols: [
                { name: 'Ademir da Guia', position: 'Meia', era: '1960-1970', image: 'https://static.gazetaesportiva.com/uploads/imagem/2019/08/26/Ademir-da-Guia-Twitter-e1566831563467.jpg' },
                { name: 'Dudu', position: 'Atacante', era: '2015-2025', image: 'https://atleticomg.net/wp-content/uploads/2025/04/dudu.jpg' },
                { name: 'Marcos', position: 'Goleiro', era: '1992-2012', image: 'https://th.bing.com/th/id/R.6cea845fd57b3220c7c90539f0fc4786?rik=%2bSCQqejYAVZ0Tw&riu=http%3a%2f%2fimagens.globoradio.globo.com%2fcbn%2ffotos%2fuploads%2f86936%2f536813-high_marcos.jpeg' },
                { name: 'César Maluco', position: 'Atacante', era: '1960-1970', image: 'https://th.bing.com/th/id/R.2dae862e019d17797b97a4ad91eec18a?rik=q64GP%2bmr5enDJA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-jmPYbj8otTY%2fTgLTMutgPUI%2fAAAAAAAAAFw%2fzgk2xKsD508%2fs1600%2fcesar-gdea.jpg' }
            ],
            stadium: {
                name: 'Allianz Parque',
                capacity: '43.713 espectadores',
                inaugurated: '2014',
                info: 'Conhecido como "Arena Palestra Itália" durante a construção, o Allianz Parque...',
                image: 'https://t2.uc.ltmcdn.com/pt/posts/9/8/6/como_visitar_o_allianz_parque_20689_orig.jpg'
            },
            stats: {
                maiorGoleada: 'Palmeiras 12 x 1 Savóia (1944)',
                maiorPublico: '120.000 pessoas (Palmeiras 2 x 1 Corinthians, 1974)',
                artilheiro: 'Heitor - 326 gols',
                jogadorComMaisJogos: 'Ademir da Guia - 901 jogos'
            }
        },
        // Outros clubes podem ser adicionados aqui seguindo a mesma estrutura...
    };

    // Função para carregar os dados do clube selecionado
    function loadClubData(clubId) {
        const club = clubsData[clubId];
        
        if (club) {
            // Exibe o carregamento enquanto as informações não são carregadas
            document.getElementById('club-info').style.display = 'none';
            document.getElementById('loading').style.display = 'block'; // Mostra o carregamento

            setTimeout(() => {
                // Atualiza as informações após o carregamento
                document.getElementById('club-logo').src = club.logo;
                document.getElementById('club-name').textContent = club.name;
                document.getElementById('club-nickname').textContent = club.nickname;
                document.getElementById('history-text').textContent = club.history;
                
                // Atualiza a aba de títulos
                const titlesList = document.getElementById('titles-list');
                titlesList.innerHTML = '';
                club.titles.forEach(title => {
                    const li = document.createElement('li');
                    li.textContent = title;
                    titlesList.appendChild(li);
                });
                
                // Atualiza a aba de ídolos
                const idolsGrid = document.getElementById('idols-grid');
                idolsGrid.innerHTML = '';
                club.idols.forEach(idol => {
                    const card = document.createElement('div');
                    card.className = 'idol-card';
                    card.innerHTML = `
                        <img src="${idol.image}" alt="${idol.name}">
                        <h4>${idol.name}</h4>
                        <p>${idol.position}</p>
                        <small>${idol.era}</small>
                    `;
                    idolsGrid.appendChild(card);
                });
                
                // Atualiza a aba de estádio
                const stadiumInfo = document.getElementById('stadium-info');
                stadiumInfo.innerHTML = `
                    <p><strong>Nome:</strong> ${club.stadium.name}</p>
                    <p><strong>Capacidade:</strong> ${club.stadium.capacity}</p>
                    <p><strong>Inauguração:</strong> ${club.stadium.inaugurated}</p>
                    <p>${club.stadium.info}</p>
                `;
                document.getElementById('stadium-image').src = club.stadium.image;
                
                // Atualiza a aba de estatísticas
                const statsContainer = document.getElementById('stats-container');
                statsContainer.innerHTML = `
                    <p><strong>Maior goleada:</strong> ${club.stats.maiorGoleada}</p>
                    <p><strong>Maior público:</strong> ${club.stats.maiorPublico}</p>
                    <p><strong>Artilheiro histórico:</strong> ${club.stats.artilheiro}</p>
                    <p><strong>Jogador com mais jogos:</strong> ${club.stats.jogadorComMaisJogos}</p>
                `;
                
                // Esconde o carregamento e exibe o conteúdo
                document.getElementById('loading').style.display = 'none';
                document.getElementById('club-info').style.display = 'block';
            }, 500); // Tempo de carregamento simulado (500ms)
        } else if (clubId === 'outros') {
            // Se o clube não existir, mostra a sugestão de clube
            document.getElementById('club-info').style.display = 'none';
            document.getElementById('other-clubs').style.display = 'block';
        }
    }

    // Adiciona eventos aos links de navegação
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove a classe active de todos os links
            document.querySelectorAll('nav a').forEach(item => {
                item.classList.remove('active');
            });
            
            // Adiciona a classe active ao link clicado
            this.classList.add('active');
            
            // Carrega os dados do clube selecionado
            const clubId = this.getAttribute('data-club');
            loadClubData(clubId);
        });
    });

    // Carrega o Palmeiras como padrão ao abrir o site
    loadClubData('palmeiras');
});
