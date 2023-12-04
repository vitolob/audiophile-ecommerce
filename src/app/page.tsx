import Button from "@/components/atoms/Button";
import ArrowButton from "@/components/atoms/ArrowButton";

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
      <ArrowButton>Shop</ArrowButton>
    </main>
  );
}
