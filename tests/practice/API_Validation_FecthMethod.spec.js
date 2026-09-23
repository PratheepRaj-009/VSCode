import { test, expect } from '@playwright/test';

test('Validate API using fetch', async () => {

    const response = await fetch('https://airportgap.com/api/airports');

    expect(response.status).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.data[0].attributes.city).toBe('Goroka');
});