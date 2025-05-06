document.addEventListener('DOMContentLoaded', function() {
    // Atualizar o ano atual no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Simular hostname do container
    const hostnames = ['docker-container-1', 'web-server-2', 'app-container-3'];
    const randomHostname = hostnames[Math.floor(Math.random() * hostnames.length)];
    document.getElementById('hostname').textContent = randomHostname;
    
    // Simular contador de acessos
    let counter = localStorage.getItem('visitCounter') || 0;
    counter = parseInt(counter) + 1;
    localStorage.setItem('visitCounter', counter);
    document.getElementById('counter').textContent = counter;
    
    // Adicionar efeito de hover nas caixas de comando
    const commands = document.querySelectorAll('.command');
    commands.forEach(command => {
        command.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e9f7fb';
            this.style.borderColor = '#0db7ed';
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        command.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f9f9f9';
            this.style.borderColor = '#ddd';
            this.style.transform = 'translateY(0)';
        });
    });
});
