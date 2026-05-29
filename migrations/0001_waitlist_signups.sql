create table if not exists waitlist_signups (
  email text primary key,
  source text not null default 'website',
  tag text not null default 'bookshell-early-access',
  created_at text not null default CURRENT_TIMESTAMP,
  updated_at text not null default CURRENT_TIMESTAMP
);

create index if not exists waitlist_signups_created_at_idx
  on waitlist_signups (created_at);
