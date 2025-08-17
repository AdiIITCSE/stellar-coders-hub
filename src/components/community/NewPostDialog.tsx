import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";

interface Post {
  id: string;
  title: string;
  content: string;
  tags: string[];
  author: string;
  timestamp: string;
  upvotes: number;
  replies: number;
  views: number;
}

interface NewPostDialogProps {
  onAddPost: (post: Omit<Post, 'id' | 'timestamp' | 'upvotes' | 'replies' | 'views'>) => void;
}

const NewPostDialog: React.FC<NewPostDialogProps> = ({ onAddPost }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both title and content.",
        variant: "destructive",
      });
      return;
    }

    const newPost = {
      title: title.trim(),
      content: content.trim(),
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
      author: "You", // In a real app, this would come from auth
    };

    onAddPost(newPost);
    
    // Reset form
    setTitle("");
    setContent("");
    setTags("");
    setOpen(false);

    toast({
      title: "Success",
      description: "Your post has been published!",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-royal-purple hover:bg-royal-purple/90 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-cloud-gray border-silver-gray/20">
        <DialogHeader>
          <DialogTitle className="text-white">Create New Post</DialogTitle>
          <DialogDescription className="text-silver-gray">
            Share your thoughts, questions, or solutions with the community.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-white">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your post title..."
              className="bg-midnight-blue border-silver-gray/30 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content" className="text-white">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              className="bg-midnight-blue border-silver-gray/30 text-white min-h-[120px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags" className="text-white">Tags (comma-separated)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="algorithms, dp, graphs..."
              className="bg-midnight-blue border-silver-gray/30 text-white"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="border-silver-gray/30 text-white hover:bg-white/5">
              Cancel
            </Button>
            <Button type="submit" className="bg-royal-purple hover:bg-royal-purple/90 text-white">
              Publish Post
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewPostDialog;