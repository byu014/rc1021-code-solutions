select
  "firstName",
  "lastName",
  sum("payments"."amount") as "total"
from "customers"
join "payments" using ("customerId")
join "rentals" using ("rentalId")
group by "customers"."customerId"
order by "total" desc;
