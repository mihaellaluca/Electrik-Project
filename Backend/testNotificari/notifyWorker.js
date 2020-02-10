console.log('Service Worker Loaded...');

self.addEventListener('push', (e) => {
	const data = e.data.json();
	console.log('Push Recieved...');
	self.registration.showNotification(data.title, {
		body: `${data.name} has a new price of ${data.price}`
	});
});
