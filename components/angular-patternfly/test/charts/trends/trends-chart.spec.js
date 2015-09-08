describe('Directive: pfTrendsChart', function() {
  var $scope, $compile, element, isolateScope;

  beforeEach(module(
    'patternfly.charts',
    'charts/trends/trends-chart.html',
    'card/basic/card.html',
    'charts/sparkline/sparkline-chart.html'
  ));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_;
  }));

  beforeEach(function() {

    $scope.config = {
      chartId  : 'testSparklineChart',
      title    : 'Network Utilization Trends',
      timeFrame: 'Last 15 Minutes',
      units    : 'MHz'
    };

    var today = new Date();
    var dates = ['dates'];
    for (var d = 20 - 1; d >= 0; d--) {
      dates.push(new Date(today.getTime() - (d * 24 * 60 * 60 * 1000)));
    }

    $scope.data = {
      total: 100,
      yData: ['used', 10, 20, 30, 20, 30, 10, 14, 20, 25, 68, 54, 56, 78, 56, 67, 88, 76, 65, 87, 76],
      xData: dates
    };

    element = compileChart('<div pf-trends-chart config="config" chart-data="data"></div>',$scope);
  });

  var compileChart = function (markup, scope) {
    element = $compile(angular.element(markup))(scope);
    scope.$apply();
    isolateScope = element.isolateScope();

    return element;
  };

  it("should show the last data point of sparkline chart as the trend heading", function() {
    expect(angular.element(element).find('.trend-title-big-pf').html()).toBe("76");
    expect(angular.element(element).find('.trend-title-small-pf').html()).toBe("MHz");
  });

  it("should show the correct card heading and time frame", function() {
    expect(angular.element(element).find('.trend-header-pf').html()).toBe("Network Utilization Trends");
    expect(angular.element(element).find('.trend-footer-pf').html()).toBe("Last 15 Minutes");
  });

});
