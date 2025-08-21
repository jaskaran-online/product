import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useParams, Outlet, useNavigate, useSearchParams } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "jaskaran",
    },
  ]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), title: input }]);
      setInput("");
    }
  };

  const removeTodo = () => {
    if (todos.length > 0) {
      setTodos(todos.slice(0, -1));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>
      <ul>
        {todos.length > 0 && (
          <>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </>
        )}
      </ul>

      <div>
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <button onClick={addTodo}>Add Todo</button>
      <button onClick={removeTodo}>Remove Last Todo</button>
    </div>
  );
}

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to React Router Tutorial</h1>
      <p>Navigate using the links above to explore different sections!</p>
      <h2>Lesson 4: Dynamic Routes</h2>
      <p>Click on a user below to see dynamic routing in action:</p>
      <ul>
        <li><Link to="/user/john">John's Profile</Link></li>
        <li><Link to="/user/jane">Jane's Profile</Link></li>
        <li><Link to="/user/bob">Bob's Profile</Link></li>
      </ul>
      <h2>Lesson 5: Nested Routes</h2>
      <p>Visit the <Link to="/dashboard">Dashboard</Link> to see nested routing with Outlet!</p>
      <h2>Lesson 6: Programmatic Navigation</h2>
      <p>Try the <Link to="/navigation-demo">Navigation Demo</Link> to see how to navigate programmatically!</p>
      <h2>Lesson 7: Search Parameters</h2>
      <p>Explore <Link to="/search-demo">Search Parameters Demo</Link> to learn about URL query strings!</p>
      <h2>Lesson 8: Route Protection</h2>
      <p>Check out <Link to="/protected-demo">Protected Routes Demo</Link> to learn about authentication and route guards!</p>
      <h2>Lesson 9: Error Handling</h2>
      <p>Explore <Link to="/error-demo">Error Boundaries Demo</Link> to learn about error handling and 404 pages!</p>
      <h2>Lesson 10: Loading States</h2>
      <p>Check out <Link to="/loading-demo">Loading States Demo</Link> to learn about async operations and loading UI!</p>
    </div>
  );
}

function NavigationDemo() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back one page in history
  };

  const handleGoForward = () => {
    navigate(1); // Go forward one page in history
  };

  const handleReplace = () => {
    navigate('/todo', { replace: true }); // Replace current history entry
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Programmatic Navigation Demo</h1>
      <p>This page demonstrates how to navigate programmatically using the useNavigate hook.</p>

      <h3>Basic Navigation:</h3>
      <button onClick={() => handleNavigation('/counter')} style={{ margin: "5px" }}>
        Go to Counter
      </button>
      <button onClick={() => handleNavigation('/todo')} style={{ margin: "5px" }}>
        Go to Todo
      </button>
      <button onClick={() => handleNavigation('/dashboard')} style={{ margin: "5px" }}>
        Go to Dashboard
      </button>

      <h3>History Navigation:</h3>
      <button onClick={handleGoBack} style={{ margin: "5px" }}>
        Go Back
      </button>
      <button onClick={handleGoForward} style={{ margin: "5px" }}>
        Go Forward
      </button>

      <h3>Advanced Navigation:</h3>
      <button onClick={handleReplace} style={{ margin: "5px" }}>
        Replace with Todo (no back button)
      </button>

      <h3>With State:</h3>
      <button onClick={() => navigate('/user/alice', { state: { from: 'navigation-demo' } })} style={{ margin: "5px" }}>
        Go to Alice's Profile with State
      </button>

      <p style={{ marginTop: "20px" }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

function SearchParamsDemo() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current values from URL
  const name = searchParams.get('name') || '';
  const age = searchParams.get('age') || '';
  const city = searchParams.get('city') || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const params = new URLSearchParams();

    for (let [key, value] of formData.entries()) {
      if (value.trim()) {
        params.set(key, value);
      }
    }

    setSearchParams(params);
  };

  const clearAll = () => {
    setSearchParams(new URLSearchParams());
  };

  const setDefaults = () => {
    setSearchParams({ name: 'John', age: '25', city: 'New York' });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Parameters Demo</h1>
      <p>This page demonstrates how to work with URL query parameters using useSearchParams.</p>

      <h3>Current URL Parameters:</h3>
      <div style={{ backgroundColor: "#f5f5f5", padding: "10px", marginBottom: "20px" }}>
        <p><strong>Name:</strong> {name || 'Not set'}</p>
        <p><strong>Age:</strong> {age || 'Not set'}</p>
        <p><strong>City:</strong> {city || 'Not set'}</p>
        <p><strong>Full URL:</strong> {window.location.href}</p>
      </div>

      <h3>Update Parameters:</h3>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name: <input name="name" defaultValue={name} style={{ marginLeft: "5px" }} />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Age: <input name="age" defaultValue={age} style={{ marginLeft: "5px" }} />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            City: <input name="city" defaultValue={city} style={{ marginLeft: "5px" }} />
          </label>
        </div>
        <button type="submit" style={{ marginRight: "10px" }}>Update URL</button>
        <button type="button" onClick={clearAll} style={{ marginRight: "10px" }}>Clear All</button>
        <button type="button" onClick={setDefaults}>Set Defaults</button>
      </form>

      <h3>Quick Actions:</h3>
      <button onClick={() => setSearchParams({ name: 'Alice' })} style={{ margin: "5px" }}>
        Set Name Only
      </button>
      <button onClick={() => setSearchParams({ city: 'San Francisco' })} style={{ margin: "5px" }}>
        Set City Only
      </button>
      <button onClick={() => setSearchParams({})} style={{ margin: "5px" }}>
        Remove All
      </button>

      <p style={{ marginTop: "20px" }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

// Simple authentication context
const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Simple demo authentication
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      setUser({ name: username, role: 'admin' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Access Denied</h2>
        <p>You need to be logged in to view this page.</p>
        <button onClick={() => navigate('/login-demo')} style={{ margin: "10px" }}>
          Go to Login
        </button>
        <button onClick={() => navigate('/')} style={{ margin: "10px" }}>
          Go to Home
        </button>
      </div>
    );
  }

  return children;
}

function LoginDemo() {
  const { login, logout, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (login(credentials.username, credentials.password)) {
      navigate('/protected-demo/admin');
    } else {
      setError('Invalid credentials. Try: admin / password');
    }
  };

  if (isAuthenticated) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Welcome, {user.name}!</h1>
        <p>You are logged in as: {user.role}</p>
        <button onClick={() => navigate('/protected-demo/admin')} style={{ margin: "10px" }}>
          Go to Admin Panel
        </button>
        <button onClick={logout} style={{ margin: "10px" }}>
          Logout
        </button>
        <p style={{ marginTop: "20px" }}>
          <Link to="/">← Back to Home</Link>
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Login Demo</h1>
      <p>This demonstrates authentication for route protection.</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>
            Username:
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              placeholder="admin"
            />
          </label>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>
            Password:
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              placeholder="password"
            />
          </label>
        </div>
        {error && <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>}
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Login
        </button>
      </form>

      <p style={{ marginTop: "20px" }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

function ProtectedRouteDemo() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Protected Routes Demo</h1>
      <p>This page demonstrates route protection based on authentication status.</p>

      <div style={{ backgroundColor: isAuthenticated ? "#d4edda" : "#f8d7da", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>Authentication Status:</h3>
        <p><strong>Logged in:</strong> {isAuthenticated ? 'Yes' : 'No'}</p>
        {isAuthenticated && (
          <>
            <p><strong>User:</strong> {user.name}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </>
        )}
      </div>

      {isAuthenticated ? (
        <div>
          <h3>Protected Content:</h3>
          <p>Welcome to the admin panel! Only authenticated users can see this.</p>
          <div style={{ backgroundColor: "#e7f3ff", padding: "15px", borderRadius: "5px" }}>
            <h4>Admin Dashboard</h4>
            <p>Here you would see sensitive information, user management tools, etc.</p>
            <ul>
              <li>Manage users</li>
              <li>View analytics</li>
              <li>System settings</li>
            </ul>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <p>You need to login to see the protected content.</p>
          <Link to="/login-demo" style={{ display: "inline-block", margin: "10px", padding: "10px 20px", backgroundColor: "#007bff", color: "white", textDecoration: "none", borderRadius: "5px" }}>
            Login
          </Link>
        </div>
      )}

      <p style={{ marginTop: "20px" }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f8d7da", borderRadius: "5px", margin: "20px" }}>
          <h2>🚨 Oops! Something went wrong</h2>
          <p>An error occurred while rendering this component.</p>
          <details style={{ marginTop: "15px", textAlign: "left" }}>
            <summary>Error Details</summary>
            <pre style={{ backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "3px", overflow: "auto" }}>
              {this.state.error.toString()}
            </pre>
          </details>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{ marginTop: "15px", padding: "10px 20px" }}
          >
            Try Again
          </button>
          <p style={{ marginTop: "20px" }}>
            <Link to="/">← Go to Home</Link>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Component that throws an error for testing
function ErrorDemo() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('This is a demo error to test error boundaries!');
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Error Boundary Demo</h1>
      <p>This page demonstrates error handling with React Error Boundaries.</p>

      <div style={{ backgroundColor: "#fff3cd", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>⚠️ Error Testing Zone</h3>
        <p>Click the button below to intentionally throw an error and see how the error boundary handles it.</p>
        <button
          onClick={() => setShouldError(true)}
          style={{ padding: "10px 20px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px" }}
        >
          🚨 Trigger Error
        </button>
      </div>

      <div style={{ backgroundColor: "#d1ecf1", padding: "15px", borderRadius: "5px" }}>
        <h3>What are Error Boundaries?</h3>
        <ul>
          <li>They catch JavaScript errors in the component tree</li>
          <li>Prevent the entire app from crashing</li>
          <li>Display fallback UI when errors occur</li>
          <li>Help with debugging and error reporting</li>
        </ul>
      </div>

      <p style={{ marginTop: "20px" }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

// 404 Not Found Component
function NotFound() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>

      <div style={{ margin: "40px 0" }}>
        <h2>🔍 Possible reasons:</h2>
        <ul style={{ textAlign: "left", maxWidth: "400px", margin: "0 auto" }}>
          <li>The URL might be misspelled</li>
          <li>The page might have been moved or deleted</li>
          <li>You might not have permission to access this page</li>
        </ul>
      </div>

      <div style={{ margin: "40px 0" }}>
        <h3>Try these helpful links:</h3>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <Link to="/" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#007bff", color: "white", textDecoration: "none", borderRadius: "5px" }}>
            🏠 Go to Home
          </Link>
          <Link to="/counter" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#28a745", color: "white", textDecoration: "none", borderRadius: "5px" }}>
            🔢 Try Counter
          </Link>
          <Link to="/dashboard" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#17a2b8", color: "white", textDecoration: "none", borderRadius: "5px" }}>
            📊 Visit Dashboard
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "5px" }}>
        <h3>💡 Pro Tip</h3>
        <p>This 404 page is created using a catch-all route (<code>*</code>) in React Router.</p>
        <p>It ensures users always see a helpful page instead of a blank screen.</p>
      </div>
    </div>
  );
}

// Loading Spinner Component
function LoadingSpinner() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div style={{
        border: "4px solid #f3f3f3",
        borderTop: "4px solid #3498db",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        animation: "spin 1s linear infinite",
        margin: "0 auto 10px"
      }}></div>
      <p>Loading...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Async Data Component
function AsyncDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (type) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call with different response times
      const delay = type === 'slow' ? 3000 : type === 'fast' ? 500 : 1500;

      await new Promise(resolve => setTimeout(resolve, delay));

      // Simulate different types of data
      const mockData = {
        users: [
          { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
          { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
          { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
        ],
        posts: [
          { id: 1, title: 'Learn React', content: 'React is awesome!' },
          { id: 2, title: 'Master React Router', content: 'Routing made easy!' },
          { id: 3, title: 'Build Great UIs', content: 'User experience matters!' }
        ],
        products: [
          { id: 1, name: 'Laptop', price: 999 },
          { id: 2, name: 'Mouse', price: 25 },
          { id: 3, name: 'Keyboard', price: 75 }
        ]
      };

      setData({ type, items: mockData[type] });
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Async Data Loading</h3>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => fetchData('users')} style={{ marginRight: "10px" }}>
          Load Users (1.5s)
        </button>
        <button onClick={() => fetchData('posts')} style={{ marginRight: "10px" }}>
          Load Posts (1.5s)
        </button>
        <button onClick={() => fetchData('products')} style={{ marginRight: "10px" }}>
          Load Products (1.5s)
        </button>
        <button onClick={() => fetchData('slow')} style={{ marginRight: "10px" }}>
          Load Slow (3s)
        </button>
        <button onClick={() => fetchData('fast')} style={{ marginRight: "10px" }}>
          Load Fast (0.5s)
        </button>
      </div>

      {loading && <LoadingSpinner />}

      {error && (
        <div style={{ color: "red", padding: "10px", backgroundColor: "#ffebee", borderRadius: "5px" }}>
          {error}
        </div>
      )}

      {data && !loading && (
        <div style={{ backgroundColor: "#e8f5e8", padding: "15px", borderRadius: "5px" }}>
          <h4>{data.type.toUpperCase()} Data Loaded Successfully!</h4>
          <pre style={{ backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "3px", overflow: "auto" }}>
            {JSON.stringify(data.items, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

// Navigation with Loading Component
function NavigationWithLoading() {
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleDelayedNavigation = async (path) => {
    setIsNavigating(true);
    // Simulate some async operation before navigation
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsNavigating(false);
    navigate(path);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Navigation with Loading States</h3>
      <p>These buttons simulate async operations before navigation.</p>

      <button
        onClick={() => handleDelayedNavigation('/counter')}
        disabled={isNavigating}
        style={{ margin: "5px", opacity: isNavigating ? 0.6 : 1 }}
      >
        Go to Counter (with delay)
      </button>
      <button
        onClick={() => handleDelayedNavigation('/dashboard')}
        disabled={isNavigating}
        style={{ margin: "5px", opacity: isNavigating ? 0.6 : 1 }}
      >
        Go to Dashboard (with delay)
      </button>

      {isNavigating && (
        <div style={{ marginTop: "10px" }}>
          <LoadingSpinner />
          <p>Preparing navigation...</p>
        </div>
      )}
    </div>
  );
}

// Main Loading States Demo Component
function LoadingStatesDemo() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Loading States Demo</h1>
      <p>This page demonstrates various loading states and async operations in React Router applications.</p>

      <div style={{ backgroundColor: "#e7f3ff", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>Why Loading States Matter</h3>
        <ul>
          <li>Provide feedback to users during async operations</li>
          <li>Prevent multiple submissions of forms</li>
          <li>Improve perceived performance</li>
          <li>Handle errors gracefully</li>
        </ul>
      </div>

      <AsyncDataComponent />
      <NavigationWithLoading />

      <div style={{ backgroundColor: "#f0f8ff", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <h3>Loading State Best Practices</h3>
        <ul>
          <li>Always show loading indicators for operations > 100ms</li>
          <li>Disable buttons during loading to prevent double submissions</li>
          <li>Provide clear error messages and retry options</li>
          <li>Consider skeleton screens for better UX</li>
          <li>Use consistent loading patterns throughout your app</li>
        </ul>
      </div>

      <p style={{ marginTop: "20px" }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard (Parent Route)</h1>
      <p>This is the parent route that contains nested routes.</p>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/dashboard" style={{ marginRight: "10px" }}>Overview</Link>
        <Link to="/dashboard/profile" style={{ marginRight: "10px" }}>Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>

      <div style={{ border: "1px solid #ccc", padding: "10px", minHeight: "200px" }}>
        <h3>Child Route Content:</h3>
        <Outlet />
      </div>

      <p style={{ marginTop: "20px" }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

function DashboardOverview() {
  return (
    <div>
      <h4>Dashboard Overview</h4>
      <p>Welcome to your dashboard! This is the overview page.</p>
      <ul>
        <li>Total Users: 1,234</li>
        <li>Active Sessions: 56</li>
        <li>Revenue: $12,345</li>
      </ul>
    </div>
  );
}

function DashboardProfile() {
  return (
    <div>
      <h4>User Profile</h4>
      <p>Manage your profile information here.</p>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: <input type="text" defaultValue="John Doe" /></label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email: <input type="email" defaultValue="john@example.com" /></label>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

function DashboardSettings() {
  return (
    <div>
      <h4>Settings</h4>
      <p>Configure your application settings.</p>
      <div style={{ marginBottom: "10px" }}>
        <label>
          <input type="checkbox" /> Enable notifications
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          <input type="checkbox" defaultChecked /> Dark mode
        </label>
      </div>
      <button>Save Settings</button>
    </div>
  );
}

function UserProfile() {
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Profile</h1>
      <p>Username: <strong>{username}</strong></p>
      <p>This is {username}'s profile page. The username is extracted from the URL!</p>

      <h3>Profile Actions:</h3>
      <button onClick={() => navigate('/', { state: { from: `user-${username}` } })} style={{ margin: "5px" }}>
        Go Home with State
      </button>
      <button onClick={() => navigate(-1)} style={{ margin: "5px" }}>
        Go Back
      </button>

      <p style={{ marginTop: "20px" }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                marginRight: "10px",
                color: isActive ? "blue" : "black",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal"
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/counter"
              style={({ isActive }) => ({
                marginRight: "10px",
                color: isActive ? "blue" : "black",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal"
              })}
            >
              Counter
            </NavLink>
            <NavLink
              to="/todo"
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal"
              })}
            >
              Todo
            </NavLink>
          </nav>

          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/user/:username" element={<UserProfile />} />
              <Route path="/navigation-demo" element={<NavigationDemo />} />
              <Route path="/search-demo" element={<SearchParamsDemo />} />
              <Route path="/login-demo" element={<LoginDemo />} />
              <Route path="/protected-demo" element={<ProtectedRouteDemo />} />
              <Route path="/error-demo" element={<ErrorDemo />} />
              <Route path="/loading-demo" element={<LoadingStatesDemo />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardOverview />} />
                <Route path="profile" element={<DashboardProfile />} />
                <Route path="settings" element={<DashboardSettings />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
