describe("Solution", function () {
	it("should pass these sample tests", function () {
		Test.assertApproxEquals(
			distanceBetweenPoints(new Point(3, 3), new Point(3, 3)),
			0
		);
		Test.assertApproxEquals(
			distanceBetweenPoints(new Point(1, 6), new Point(4, 2)),
			5
		);
		Test.assertApproxEquals(
			distanceBetweenPoints(
				new Point(-10.2, 12.5),
				new Point(0.3, 14.7)
			).toFixed(6),
			10.728001
		);
	});
});
