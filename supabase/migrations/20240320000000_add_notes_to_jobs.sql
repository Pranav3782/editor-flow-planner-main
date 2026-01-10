
-- Migration to add notes column to jobs table
alter table "public"."jobs" add column "notes" text;
