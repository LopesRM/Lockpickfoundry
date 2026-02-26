Hooks.once('init', () => {
    console.log("Tesouro | Inicializando o sistema de tesouros...");
    
    // Aqui você registra as configurações do módulo (Ex: Dificuldade padrão)
    game.settings.register("meu-modulo-tesouro", "defaultLockDC", {
        name: "Dificuldade Padrão de Tranca",
        hint: "A classe de dificuldade base para baús comuns.",
        scope: "world",
        config: true,
        type: Number,
        default: 15
    });
});

Hooks.on('ready', () => {
    ui.notifications.info("Módulo de Tesouros Carregado! Boas aventuras.");
});

// Exemplo de Hook para interceptar o clique em um baú (Actor tipo loot)
Hooks.on('renderActorSheet', (app, html, data) => {
    if (data.actor.type === "loot") {
        // Adicionar um botão "Trancar/Destrancar" na ficha
        const lockBtn = $('<a class="lock-button"><i class="fas fa-lock"></i> Trancar</a>');
        html.closest('.app').find('.window-title').after(lockBtn);
        
        lockBtn.click(ev => {
            ui.notifications.warn(`O baú ${data.actor.name} agora está trancado!`);
        });
    }
});