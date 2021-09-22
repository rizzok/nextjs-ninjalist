import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae
        nostrum, laboriosam minima quis suscipit itaque sint numquam, rem
        officia explicabo sed natus quam corporis nisi distinctio saepe ullam
        quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae
        nostrum, laboriosam minima quis suscipit itaque sint numquam, rem
        officia explicabo sed natus quam corporis nisi distinctio saepe ullam
        quae.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
