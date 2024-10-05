## docker-setup

### start & stop container

```bash
bun run db:start #docker compose up -d
bun run db:stop #docker compose down
```

### connecting postgres serve

```bash
docker exec -it f305 psql postgres postgres

postgres=#
```



