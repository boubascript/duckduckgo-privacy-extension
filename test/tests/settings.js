(function() {
  QUnit.module("settings");

  var settings = require('settings');
  
  var testSetting = {name: 'testSetting', value: 'testSettingValue'};
  
  QUnit.test("update and get settings by interface", function (assert) {
      settings.updateSetting(testSetting.name, testSetting.value);

      var updatedSetting = settings.getSetting(testSetting.name);
      assert.ok(updatedSetting !== null, 'test setting was added');
      assert.ok(updatedSetting === testSetting.value, 'test setting has correct value');
  });

  QUnit.test("store and get an object through interface", function (assert) {
      var obj = {'key': true};
      settings.updateSetting(testSetting.name, obj);
      var updatedSetting = settings.getSetting(testSetting.name);

      assert.ok(updatedSetting !== null, 'test setting was added');
      assert.ok(updatedSetting === obj, 'test setting has correct value');
  });

})();
