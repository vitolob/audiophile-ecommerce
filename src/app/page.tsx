import Button from "@/components/atoms/Button";
import ArrowButton from "@/components/atoms/ArrowButton";
import TextInput from "@/components/atoms/TextInput";

export default function Home() {
  return (
    <main>
      Audiophile E-commerce
      <div>
        <Button variant="primary">See Product</Button>
        <Button variant="outline" className="ml-2">
          See Product
        </Button>
      </div>
      <div>
        <ArrowButton>Shop</ArrowButton>
      </div>
      <div>
        <TextInput fieldLabel="Name" placeholder="Insert your name" />
      </div>
    </main>
  );
}
