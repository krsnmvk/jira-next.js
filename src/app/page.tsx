import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col gap-y-3 p-5">
      <Button variant="default">default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="muted">muted</Button>
      <Button variant="teritrary" size="xs">
        teritrary
      </Button>
    </div>
  );
}
