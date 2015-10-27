describe('widgets/view', function() {

  beforeEach(function() {
    this.model = new cdb.geo.ui.Widget.Model({
      id: 'widget_1',
      options: {
        title: 'Hello widget',
        columns: ['cartodb_id', 'description']
      }
    });
    this.view = new cdb.geo.ui.Widget.View({
      model: this.model
    });
    this.view.render();
  });

  it('should have 3 subviews, content, loader and error panes', function() {
    expect(_.size(this.view._subviews)).toBe(3);
  });

  it('should have defined "_createContentView" method', function() {
    expect(this.view._createContentView).toBeDefined();
  });

});