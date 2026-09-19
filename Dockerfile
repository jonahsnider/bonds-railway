FROM ghcr.io/naiba/bonds:0.22.19

ENV APP_ENV=production \
    BACKUP_DIR=/app/data/backups \
    BLEVE_INDEX_PATH=/app/data/bonds.bleve \
    DB_DRIVER=postgres \
    SERVER_HOST=0.0.0.0 \
    STORAGE_UPLOAD_DIR=/app/data/uploads

CMD ["sh", "-c", "SERVER_PORT=${PORT:-8080} exec ./bonds-server"]
