import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  app.route('/restaurants')
    .get(
      RestaurantController.index
    )

  app.route('/restaurants/:restaurantId')
    .get(
      RestaurantController.show
    )
    .post(
      RestaurantController.create
    )
    .put(
      RestaurantController.update
    )
    .delete(
      RestaurantController.destroy
    )
}
export default loadFileRoutes
