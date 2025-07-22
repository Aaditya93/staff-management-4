module.exports = {
  apps: [{
    name: 'scan-email-server',
    script: './dist/server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    // Add user specification
    user: 'root',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    // Restart on crash
    min_uptime: '10s',
    max_restarts: 10,
    // Kill timeout
    kill_timeout: 5000,
    // Wait time before restart
    restart_delay: 4000,
    // Add additional options for root user
    uid: 'root',
    gid: 'root'
  }]
};