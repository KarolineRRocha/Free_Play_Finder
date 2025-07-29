#!/bin/bash

# Iniciar o json-server em background
echo "Iniciando JSON Server..."
npx json-server --watch api.json --port 3000 &
JSON_SERVER_PID=$!

# Aguardar um pouco para o servidor inicializar
sleep 3

# Verificar se o json-server está rodando
if curl -s http://localhost:3000/gamesList > /dev/null; then
    echo "JSON Server iniciado com sucesso na porta 3000"
else
    echo "Erro ao iniciar JSON Server"
    kill $JSON_SERVER_PID 2>/dev/null
    exit 1
fi

# Iniciar o Angular
echo "Iniciando Angular..."
ng serve --open

# Quando o Angular for interrompido, parar o json-server também
kill $JSON_SERVER_PID 2>/dev/null
echo "Servidores parados" 