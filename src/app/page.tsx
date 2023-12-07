import Button from "@/components/atoms/Button";
import ArrowButton from "@/components/atoms/ArrowButton";
import TextInput from "@/components/atoms/TextInput";
import RadioButton from "@/components/atoms/RadioButton";

export default function Home() {
  return (
    <main className="ml-2">
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
      <div className="mt-1">
        <RadioButton fieldLabel="e-Money" />
      </div>
    </main>
  );
}
