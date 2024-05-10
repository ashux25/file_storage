import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
export const Header = () => {
  return (
    <div className="border-b py-4 bg-gray-100">
      <div className="items-center container mx-auto flex justify-between">
        <div>Ultra Storage</div>
        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </div>
  );
};
