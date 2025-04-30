'use client';

import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ExampleDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Nút để mở dialog */}
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Mở hộp thoại</Button>
      </DialogTrigger>

      {/* Nội dung của dialog */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Xác nhận xóa</DialogTitle>
          <DialogDescription>Bạn có chắc chắn muốn xóa mục này không?</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Hủy</Button>
          <Button onClick={() => {
            // Xử lý xóa...
            setOpen(false);
          }}>Xóa</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}