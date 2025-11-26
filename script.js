        function switchTab(event, tabName) {
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => {
                content.classList.remove('active');
            });

            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            document.getElementById(tabName).classList.add('active');
            event.target.classList.add('active');
        }

        window.addEventListener('scroll', () => {
            const btn = document.querySelector('.back-to-top');
            if (window.scrollY > 300) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function simulateOrder() {
            const userName = document.getElementById('userNameInput').value.trim();
            const output = document.getElementById('demoOutput');

            if (!userName) {
                alert('Por favor, digite um nome!');
                return;
            }

            const timestamp = new Date().toLocaleTimeString('pt-BR');
            const orderId = Math.floor(Math.random() * 10000);
            const restaurante = ['Pizzaria do Bruno', 'Sushi House', 'Hamburgeria Artesanal', 'Comida Chinesa'][Math.floor(Math.random() * 4)];
            const total = (Math.random() * 50 + 15).toFixed(2);
            const tempo = Math.floor(Math.random() * 30 + 15);

            let output_text = `╔════════════════════════════════════════╗
║   SIMULAÇÃO: PEDIDO UBER EATS          ║
╚════════════════════════════════════════╝

📍 USUÁRIO: ${userName}
🕐 TIMESTAMP: ${timestamp}
🆔 ID DO PEDIDO: ${orderId}

[1/6] 📡 Requisição enviada ao servidor...
  → POST https://api.ubereats.com/v1/orders
  
[2/6] ✅ Backend recebeu e validou dados
  → Usuário ${userName} verificado no DB
  
[3/6] 🔍 Consultando banco de dados...
  → SELECT * FROM restaurants WHERE open = true
  → Restaurante selecionado: ${restaurante}
  
[4/6] 💳 Processando pagamento...
  → Valor: R$ ${total}
  → Status: ✓ APROVADO
  
[5/6] 💾 Criando registro no DB...
  → INSERT INTO orders VALUES (${orderId}, '${userName}', '${restaurante}', ${total})
  → Status: confirmado
  
[6/6] 📱 Respondendo ao app mobile...
  → JSON response enviado
  → Cache local atualizado
  → UI atualizada no seu telefone

════════════════════════════════════════
✅ SUCESSO! Seu pedido foi confirmado
   Tempo estimado: ${tempo} minutos
════════════════════════════════════════`;

            output.textContent = output_text;
            output.style.display = 'block';

            setTimeout(() => {
                output.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }

        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && document.getElementById('userNameInput') === document.activeElement) {
                simulateOrder();
            }
        });