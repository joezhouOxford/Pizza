'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /pizza when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/pizza");
  });


  describe('pizza', function() {

    beforeEach(function() {
      browser.get('index.html#/pizza');
    });


    it('should render pizza when user navigates to /pizza', function() {
      expect(element.all(by.className('price')).first().getText()).toContain("5");
       // toMatch(/£ 5/);
    });

  });



});
