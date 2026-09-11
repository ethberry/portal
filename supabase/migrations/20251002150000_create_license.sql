create type public.license_status as enum (
  'ACTIVE',
  'REVOKED',
  'EXPIRED'
);

create table public.license (
  uuid uuid not null default gen_random_uuid(),
  title varchar not null,
  status public.license_status not null default 'ACTIVE',
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint license_pkey primary key (uuid)
);

alter table public.license enable row level security;

grant all on table public.license to anon, authenticated, service_role;
