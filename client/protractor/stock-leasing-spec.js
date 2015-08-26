/*jslint white: true*/
/*global describe, beforeEach, browser, it, expect, by */

describe('Stock Leasing', function() {
  "use strict";

  beforeEach(function() {
    browser.get('http://127.0.0.1:8080/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Leasing Stock');
  });

  it('should have a table entry for consumption', function() {
    expect(element(by.binding('item.consumption')).getText()).toEqual('12');
  });
});
