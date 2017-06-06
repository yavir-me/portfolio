Mev test task
=============
Alternative MongoDB client which allows to make selects from db through declarative sql syntax.

## Query structure
```php
SELECT [<Projections>] [ FROM <Target>]
[ WHERE <Condition>*]
[ ORDER  BY < Fields >* [ ASC|  DESC] *]
[ SKIP <SkipRecords>]
[ LIMIT <MaxRecords>]
```
