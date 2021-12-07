with
"filmRevenue" as (
  select
    "films"."filmId",
    sum("amount") as "revenue"
  from "payments"
  join "rentals" using ("rentalId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  group by "films"."filmId"
),

"filmCost" as (
  select
    "films"."filmId",
    sum("films"."replacementCost") as "cost"
  from "inventory"
  join "films" using ("filmId")
  group by "films"."filmId"
)
select
"films"."title",
"films"."description",
"films"."rating",
sum("filmRevenue"."revenue" - "filmCost"."cost") as "totalProfit"
from "filmRevenue"
join "filmCost" using ("filmId")
join "films" using ("filmId")
group by "films"."filmId"
order by "totalProfit" desc
limit 5;
