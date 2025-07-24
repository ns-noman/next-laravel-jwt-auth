<h1>Laravel + Next.js Authentication App</h1>

<p>
  This is a full-stack authentication project using <strong>Laravel 12</strong> as the backend and <strong>Next.js 15.4.1</strong> as the frontend. 
  It utilizes <strong>Laravel Sanctum</strong> for API authentication and <strong>MySQL</strong> as the database.
</p>

<h2>📁 Folder Structure</h2>
<ul>
  <li><code>laravel-app</code> – Laravel 12 backend API</li>
  <li><code>next-app</code> – Next.js 15.4.1 frontend (React)</li>
  <li><code>README.md</code> – Project documentation (this file)</li>
</ul>

<h2>🔧 Backend Setup (Laravel)</h2>

<ol>
  <li>Navigate to the Laravel directory:
    <pre><code>cd laravel-app</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>composer install</code></pre>
  </li>
  <li>Copy the example environment file:
    <pre><code>cp .env.example .env</code></pre>
  </li>
  <li>Configure your <code>.env</code> database credentials.</li>
  <li>Generate the app key:
    <pre><code>php artisan key:generate</code></pre>
  </li>
  <li>Run database migrations:
    <pre><code>php artisan migrate</code></pre>
  </li>
  <li>Run the Laravel server:
    <pre><code>php artisan serve</code></pre>
  </li>
</ol>

<h3>Sanctum Configuration</h3>
<ul>
  <li>Ensure Sanctum is installed:
    <pre><code>composer require laravel/sanctum</code></pre>
  </li>
  <li>Publish Sanctum config:
    <pre><code>php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"</code></pre>
  </li>
  <li>Add Sanctum middleware to <code>api</code> and <code>web</code> middlewares as needed.</li>
</ul>

<h2>🧑‍💻 Frontend Setup (Next.js)</h2>

<ol>
  <li>Navigate to the Next.js directory:
    <pre><code>cd next-app</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create a <code>.env.local</code> file and configure the API base URL, for example:
    <pre><code>
NEXT_PUBLIC_API_URL=http://localhost:8000
    </code></pre>
  </li>
  <li>Run the development server:
    <pre><code>npm run dev</code></pre>
  </li>
</ol>

<h2>✅ Features</h2>
<ul>
  <li>User registration</li>
  <li>User login and logout</li>
  <li>Authentication using Laravel Sanctum</li>
  <li>Token-based API requests</li>
  <li>Session handling with cookies (CSRF protection)</li>
</ul>

<h2>🛠 Technologies Used</h2>
<ul>
  <li>Laravel 12 (PHP Framework)</li>
  <li>Next.js 15.4.1 (React Framework)</li>
  <li>Laravel Sanctum (Authentication)</li>
  <li>MySQL (Database)</li>
</ul>

<h2>📌 Notes</h2>
<ul>
  <li>Ensure <code>APP_URL</code> in Laravel matches the frontend origin to avoid CORS issues.</li>
  <li>Sanctum uses cookie-based auth, so set <code>withCredentials: true</code> on Axios or fetch calls from Next.js.</li>
</ul>

<h2>📄 License</h2>
<p>This project is open-source and free to use under the MIT License.</p>
