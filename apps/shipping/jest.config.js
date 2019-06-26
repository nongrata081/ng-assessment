module.exports = {
	name: 'shipping',
	preset: '../../jest.config.js',
	coverageDirectory: '../../coverage/apps/shipping',
	snapshotSerializers: [
		'jest-preset-angular/AngularSnapshotSerializer.js',
		'jest-preset-angular/HTMLCommentSerializer.js'
	]
};
