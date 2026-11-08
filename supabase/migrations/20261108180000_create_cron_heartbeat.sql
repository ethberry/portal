-- One row per cron job: the time of its last run and how many times it ran.
-- The job writes here on every run, which counts as database activity and keeps the Supabase project from being paused.
create table public.cron_heartbeat (
  name varchar not null,
  ran_at timestamptz not null default now(),
  runs bigint not null default 0,
  constraint cron_heartbeat_pkey primary key (name)
);

alter table public.cron_heartbeat enable row level security;

grant all on table public.cron_heartbeat to service_role;
