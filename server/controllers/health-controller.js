// get health of application
exports.getHealth = (req, res, next) => {
  console.log('In route - getHealth');
  res.json({
    status: 'UP',
    last_item_added: '',
    items_marked_done_this_week: '',
    database_items: ''
  });
};
