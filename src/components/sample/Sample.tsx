import { Button } from "@/components/ui/button";

type Props = {
  name: string;
}

const Sample = ({ name }: Props) => {
  return (
    <>
      <Button variant="destructive">Destructive</Button>
      <h1>Hello, {name}</h1>
    </>
  )
}

export default Sample;