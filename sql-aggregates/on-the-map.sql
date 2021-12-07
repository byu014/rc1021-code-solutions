select
  "countries"."name" as "country",
  count(*) as "cities"
from "cities"
join "countries" using ("countryId")
where "countryId" = "countries"."countryId"
group by "countries"."name";
