tinymce.PluginManager.add('ng4TinymceCustomTiposDispositipos', function (editor) {
    editor.addSidebar('ng4TinymceCustomTiposDispositipos', {
      tooltip: 'My sidebar',
      icon: 'settings',
      onrender: function (api) {
        console.log('Render panel', api.element());
      },
      onshow: function (api) {
        console.log('Show panel', api.element());
        api.element().innerHTML = '<select><option></option></select>';
      },
      onhide: function (api) {
        console.log('Hide panel', api.element());
      }
    });
  });
  