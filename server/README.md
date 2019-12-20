### CRUD API

Create/POST : /photo:reviewId
posts a new photo

READ/GET : /business/:resterauntId
 gets joined table info for reviews (with associated users and images) tied to the specific business

Update/PUT : /vote/cool/:reviewId
updates increments the cool count of the image

Delete/DELETE : /review/:reviewId
delete the review associated with the Id