```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```