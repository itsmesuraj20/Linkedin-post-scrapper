#!/bin/bash

echo "Creating test user..."
echo "Email: test@test@gmail.com"
echo "Password: test@123"
echo ""

# Make the HTTP request to create test user
curl -X POST http://localhost:5000/api/admin/create-test-user \
  -H "Content-Type: application/json" \
  -d '{}'

echo ""
echo ""
echo "If successful, you can now login with:"
echo "Email: test@test@gmail.com"
echo "Password: test@123"
