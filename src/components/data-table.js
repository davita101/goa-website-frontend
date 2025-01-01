import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, Circle, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schema/user";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
const data = [
    {
        _id: "49c6589f-aba8-4d02-b3ce2-548de0b51d40",
        name: "Alice Johnson",
        age: 21,
        studentFbLink: "https://facebook.com/alicejohnson",
        email: "alicejohnson@example.com",
        githubLink: "https://github.com/alicejohnson",
        speed: 4,
        group: "44",
        role: "miniLeader",
        leaderId: "675dee40a1bb4008aab7ce43",
        parentFbLink: "https://facebook.com/alicejohnsonparent",
        githubToken: "123124145666424564564345345",
        githubLastUpdate: "2021-09-02",
        fines: {
            githubFine: 1,
            miniLeaderFine: 2,
            miniStudentFine: 3
        },
        aura: {
            points: 9999,
            classwork: 9999,
            attendance: 9999,
            help: 9999,
            camera: 9999,
            answers: 99993
        },
        payedInfo: false,
        comment: {
            leaderComment: "123",
            leaderProof: "123",
            controller: {
                miniLeaderController: "miniLeaderController",
                leaderController: "leaderController"
            }
        }
    },
    {
        _id: "49c6589f-aba8-4d02-b4ce2-548de0b51d41",
        name: "sophia🌸",
        age: 16,
        studentFbLink: "https://facebook.com/sofia",
        email: "sofia@example.com",
        githubLink: "https://github.com/SopiaGorgadze",
        speed: 4,
        group: "50",
        role: "miniLeader",
        leaderId: "🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧",
        parentFbLink: "https://facebook.com/alicejohnsonparent",
        githubToken: "%3333",
        githubLastUpdate: "2024-12-25",
        fines: {
            githubFine: 0,
            miniLeaderFine: 0,
            miniStudentFine: 0
        },
        aura: {
            points: 0,
            classwork: 1,
            attendance: 1,
            help: 1,
            camera: 1,
            answers: 1,
        },
        payedInfo: false,
        comment: {
            leaderComment: "ეშხიანი გოგნა ვარ!🌸",
            leaderProof: "ფრუფი რად უნდა!😊💔",
            controller: {
                miniLeaderController: "მინი ლიდერების დედოფალი🌸",
                leaderController: "ლიდერების დედოფალი🌸"
            }
        }
    },
    {
        _id: "49c6589f-a1ba8-4d02-bce2-548de03b51d40",
        name: "gio lomi",
        age: 21,
        studentFbLink: "https://facebook.com/alicejohnson",
        email: "alicejohnson@example.com",
        githubLink: "https://github.com/alicejohnson",
        speed: 4,
        role: "student",
        group: "45",
        leaderId: "675dee40a1bb4008aab7ce43",
        parentFbLink: "https://facebook.com/alicejohnsonparent",
        githubToken: "45347565343454736464564564345345",
        githubLastUpdate: "2021-09-04",
        fines: {
            githubFine: 1,
            miniLeaderFine: 2,
            miniStudentFine: 3
        },
        aura: {
            points: 88,
            classwork: 88,
            attendance: 88,
            help: 88,
            camera: 88,
            answers: 883
        },
        payedInfo: false,
        comment: {
            leaderComment: "123",
            leaderProof: "123",
            controller: {
                miniLeaderController: "miniLeaderController",
                leaderController: "leaderController"
            }
        }
    },
    {
        _id: "49c6589f-aba81-4d02-bce2-54568de0b51d40",
        name: "davit lomim",
        age: 21,
        studentFbLink: "https://facebook.com/alicejohnson",
        email: "alicejohnson@example.com",
        githubLink: "https://github.com/alicejohnson",
        speed: 4,
        role: "student",
        group: "46",
        leaderId: "datvi1",
        parentFbLink: "https://facebook.com/alicejohnsonparent",
        githubToken: "4534534345436464564564345345",
        githubLastUpdate: "2021-09-05",
        fines: {
            githubFine: 1,
            miniLeaderFine: 1,
            miniStudentFine: 1
        },
        aura: {
            points: 9999999,
            classwork: 999999,
            attendance: 999999,
            help: 999999,
            camera: 999999,
            answers: 9993999
        },
        payedInfo: true,
        comment: {
            leaderComment: "123",
            leaderProof: "123",
            controller: {
                miniLeaderController: "123",
                leaderController: "123"
            }
        }
    },
    {
        "_id": "49c6589f-aba8-4d0212-bce2-548de0b51d40",
        "name": "nameless",
        "age": 21,
        "studentFbLink": "https://facebook.com/alicejohnson",
        "email": "alicejohnson@example.com",
        "speed": 4,
        "role": "student",
        "group": "46",
        "leaderId": "datvi2",
        "parentFbLink": "https://facebook.com/alicejohnsonparent",
        "githubLink": "https://github.com/alicejohnson",
        "githubToken": "12345624412423423242342342414",
        "githubLastUpdate": "2021-09-06",
        "fines": {
            "githubFine": 1,
            "miniLeaderFine": 1,
            "miniStudentFine": 1
        },
        "aura": {
            "points": 1,
            "classwork": 1,
            "attendance": 1,
            "help": 1,
            "camera": 1,
            "answers": 1
        },
        "payedInfo": true,
        "comment": {
            "leaderComment": "123",
            "leaderProof": "123",
            "controller": {
                "miniLeaderController": "123",
                "leaderController": "123"
            }
        }
    },
];
export const columns = [
    {
        id: "select",
        header: ({ table }) => (React.createElement(Checkbox, { checked: table.getIsAllPageRowsSelected() ? true :
                table.getIsSomePageRowsSelected() ? "indeterminate" : false, onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value), "aria-label": "Select all" })),
        cell: ({ row }) => (React.createElement(Checkbox, { checked: row.getIsSelected(), onCheckedChange: (value) => row.toggleSelected(!!value), "aria-label": "Select row" })),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "role",
        header: ({ column }) => {
            return (React.createElement(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc") },
                "role",
                React.createElement(ArrowUpDown, null)));
        },
        cell: ({ row }) => (React.createElement("div", { className: "capitalize" }, React.createElement(Badge, null, row.getValue("role")))),
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (React.createElement(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc") },
                "name",
                React.createElement(ArrowUpDown, null)));
        },
        cell: ({ row }) => (React.createElement("div", { className: "capitalize" }, row.getValue("name"))),
    },
    {
        accessorKey: "age",
        header: "age",
        cell: ({ row }) => (React.createElement("div", { className: "capitalize" },
            React.createElement(Badge, { variant: "outline" }, row.getValue("age")))),
    },
    {
        accessorKey: "email",
        header: "email",
        cell: ({ row }) => React.createElement("div", { className: "lowercase" }, row.getValue("email")),
    },
    {
        accessorKey: "studentFbLink",
        header: "studentFbLink",
        cell: ({ row }) => (React.createElement("div", { className: "capitalize" },
            React.createElement(Link, { target: "_blank", to: row.getValue("studentFbLink") },
                React.createElement(Button, { variant: "link" }, "Facebook")))),
    },
    {
        accessorKey: "githubLastUpdate",
        header: ({ column }) => {
            return (React.createElement(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc") },
                "LastUpdate",
                React.createElement(ArrowUpDown, null)));
        },
        cell: ({ row }) => (React.createElement("div", { className: "capitalize" }, row.getValue("githubLastUpdate"))),
    },
    {
        accessorKey: "githubLink",
        header: "githubLink",
        cell: ({ row }) => (React.createElement("div", { className: "capitalize" },
            React.createElement(Link, { target: "_blank", to: row.getValue("githubLink") },
                React.createElement(Button, { variant: "link" }, "githubLink")))),
    },
    {
        accessorKey: "speed",
        header: ({ column }) => {
            return (React.createElement(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc") },
                "speed",
                React.createElement(ArrowUpDown, null)));
        },
        cell: ({ row }) => (React.createElement("div", { className: "capitalize " },
            React.createElement(Badge, { variant: "outline" }, row.getValue("speed")))),
    },
    {
        accessorKey: "group",
        header: ({ column }) => {
            return (React.createElement(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc") },
                "group",
                React.createElement(ArrowUpDown, null)));
        },
        cell: ({ row }) => (React.createElement("div", { className: "capitalize" },
            React.createElement(Badge, { variant: "outline" }, row.getValue("group")))),
    },
    {
        accessorKey: "leaderId",
        header: "leaderId",
        cell: ({ row }) => (React.createElement("div", { className: "capitalize" },
            React.createElement(Link, { target: "_blank", to: row.getValue("leaderId") },
                React.createElement(Button, { variant: "link" }, "leaderID")))),
    },
    {
        accessorKey: "parentFbLink",
        header: "parentFbLink",
        cell: ({ row }) => (React.createElement("div", { className: "capitalize" },
            React.createElement(Link, { target: "_blank", to: row.getValue("parentFbLink") },
                React.createElement(Button, { variant: "link" }, "parenLink")))),
    },
    {
        accessorKey: "fines",
        header: () => {
            return (React.createElement(Button, { variant: "destructive" },
                "fines",
                React.createElement(ArrowUpDown, null)));
        },
        cell: ({ row }) => (React.createElement(HoverCard, null,
            React.createElement(HoverCardTrigger, { asChild: true },
                React.createElement(Button, { variant: "link" }, "@fines")),
            React.createElement(HoverCardContent, { className: "w-40 duration-100" },
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement("span", null, "githubFine"),
                    React.createElement("span", null, row.getValue("fines").githubFine)),
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement("span", null, "miniLeaderFine"),
                    React.createElement("span", null, row.getValue("fines").miniLeaderFine)),
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement("span", null, "miniStudentFine"),
                    React.createElement("span", null, row.getValue("fines").miniStudentFine))))),
    },
    {
        accessorKey: "aura",
        header: () => {
            return (React.createElement(Button, { variant: "destructive" },
                "aura",
                React.createElement(ArrowUpDown, null)));
        },
        cell: ({ row }) => (React.createElement(HoverCard, null,
            React.createElement(HoverCardTrigger, { asChild: true },
                React.createElement(Button, { variant: "link", onTouchStart: (event) => event.preventDefault() }, "@Aura")),
            React.createElement(HoverCardContent, { className: "w-40 duration-100" },
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement("span", null, "points"),
                    React.createElement("span", null, row.getValue("aura").points)),
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement("span", null, "classwork"),
                    React.createElement("span", null, row.getValue("aura").classwork)),
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement("span", null, "attendance"),
                    React.createElement("span", null, row.getValue("aura").attendance)),
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement("span", null, "help"),
                    React.createElement("span", null, row.getValue("aura").help)),
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement("span", null, "camera"),
                    React.createElement("span", null, row.getValue("aura").camera)),
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement("span", null, "answers"),
                    React.createElement("span", null, row.getValue("aura").answers))))),
    },
    {
        accessorKey: "payedInfo",
        header: "payedInfo",
        cell: ({ row }) => (React.createElement("div", { className: "capitalize" }, row.getValue("payedInfo") ? "True" : "False")),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;
            const [rowColor, setRowColor] = React.useState(() => {
                const savedColors = JSON.parse(localStorage.getItem('rowColors') || '{}');
                return savedColors[payment._id] || '';
            });
            React.useEffect(() => {
                const savedColors = JSON.parse(localStorage.getItem('rowColors') || '{}');
                savedColors[payment._id] = rowColor;
                localStorage.setItem('rowColors', JSON.stringify(savedColors));
            }, [rowColor, payment._id]);
            const handleColorChange = (color) => {
                setRowColor(color);
            };
            return (React.createElement(DropdownMenu, null,
                React.createElement(DropdownMenuTrigger, { asChild: true },
                    React.createElement(Button, { variant: "ghost", className: "h-8 w-8 p-0" },
                        React.createElement("span", { className: "sr-only" }, "Open menu"),
                        React.createElement(MoreHorizontal, null))),
                React.createElement(DropdownMenuContent, { align: "end" },
                    React.createElement(DropdownMenuLabel, null, "Actions"),
                    React.createElement(DropdownMenuItem, { onClick: () => navigator.clipboard.writeText(payment._id) }, "Copy payment ID"),
                    React.createElement(DropdownMenuSeparator, null),
                    React.createElement(DropdownMenuGroup, null,
                        React.createElement(DropdownMenuSub, null,
                            React.createElement(DropdownMenuSubTrigger, null, "colors"),
                            React.createElement(DropdownMenuPortal, null,
                                React.createElement(DropdownMenuSubContent, null,
                                    React.createElement(DropdownMenuItem, { onClick: () => handleColorChange('inherit') }, "none"),
                                    React.createElement(DropdownMenuItem, { onClick: () => handleColorChange('var(action-color-white)') },
                                        React.createElement(Circle, { color: "var(--action-color-white)" }),
                                        "white"),
                                    React.createElement(DropdownMenuItem, { onClick: () => handleColorChange('var(--action-color-red)') },
                                        React.createElement(Circle, { color: "var(--action-color-red)" }),
                                        "red"),
                                    React.createElement(DropdownMenuItem, { onClick: () => handleColorChange('var(--action-color-green)') },
                                        React.createElement(Circle, { color: "var(--action-color-green)" }),
                                        "green"),
                                    React.createElement(DropdownMenuItem, { onClick: () => handleColorChange('var(--action-color-yellow)') },
                                        React.createElement(Circle, { color: "var(--action-color-yellow)" }),
                                        "yellow"),
                                    React.createElement(DropdownMenuItem, { onClick: () => handleColorChange('var(--action-color-purple)') },
                                        React.createElement(Circle, { color: "var(--action-color-purple)" }),
                                        "purple"),
                                    React.createElement(DropdownMenuItem, { onClick: () => handleColorChange('var(--action-color-orange)') },
                                        React.createElement(Circle, { color: "var(--action-color-orange)" }),
                                        "orange"),
                                    React.createElement(DropdownMenuItem, { onClick: () => handleColorChange('var(--action-color-pink)') },
                                        React.createElement(Circle, { color: "var(--action-color-pink)" }),
                                        "pink"))))))));
        },
    },
];
export function DataTable() {
    var _a, _b, _c;
    const [sorting, setSorting] = React.useState(() => {
        const savedSorting = localStorage.getItem('sorting');
        return savedSorting ? JSON.parse(savedSorting) : [];
    });
    const [columnFilters, setColumnFilters] = React.useState(() => {
        const savedFilters = localStorage.getItem('columnFilters');
        return savedFilters ? JSON.parse(savedFilters) : [];
    });
    const [columnVisibility, setColumnVisibility] = React.useState(() => {
        const savedVisibility = localStorage.getItem('columnVisibility');
        return savedVisibility ? JSON.parse(savedVisibility) : {};
    });
    const [rowSelection, setRowSelection] = React.useState(() => {
        const savedSelection = localStorage.getItem('rowSelection');
        return savedSelection ? JSON.parse(savedSelection) : {};
    });
    const [oneRowSelection, setOneRowSelection] = React.useState(() => {
        const savedSelection = localStorage.getItem('oneRowSelection');
        return savedSelection ? JSON.parse(savedSelection) : {};
    });
    React.useEffect(() => {
        localStorage.setItem('sorting', JSON.stringify(sorting));
    }, [sorting]);
    React.useEffect(() => {
        localStorage.setItem('columnFilters', JSON.stringify(columnFilters));
    }, [columnFilters]);
    React.useEffect(() => {
        localStorage.setItem('columnVisibility', JSON.stringify(columnVisibility));
    }, [columnVisibility]);
    React.useEffect(() => {
        localStorage.setItem('rowSelection', JSON.stringify(rowSelection));
    }, [rowSelection]);
    React.useEffect(() => {
        localStorage.setItem('oneRowSelection', JSON.stringify(oneRowSelection));
    }, [oneRowSelection]);
    const table = useReactTable({
        data: data.sort((a, b) => a.group < b.group ? 1 : -1),
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    const form = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: {
            _id: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection._id) || '',
            group: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.group) || '',
            leaderId: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.leaderId) || '', // Initialize with oneRowSelection.leaderId if available
            name: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.name) || '', // Initialize with oneRowSelection.name if available
            studentFbLink: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.studentFbLink) || '', // Initialize with oneRowSelection.studentFbLink if available
            age: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.age) || 0, // Initialize with oneRowSelection.age if available
            email: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.email) || '', // Initialize with oneRowSelection.email if available
            githubLink: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.githubLink) || '', // Initialize with oneRowSelection.githubLink if available
            speed: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.speed) || 0, // Initialize with oneRowSelection.speed if available
            role: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.role) || '', // Initialize with oneRowSelection.role if available
            parentFbLink: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.parentFbLink) || '', // Initialize with oneRowSelection.parentFbLink if available
            githubToken: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.githubToken) || '', // Initialize with oneRowSelection.githubToken if available
            githubLastUpdate: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.githubLastUpdate) || '', // Initialize with oneRowSelection.githubLastUpdate if available
            fines: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.fines) || { githubFine: 0, miniLeaderFine: 0, miniStudentFine: 0 }, // Initialize with oneRowSelection.fines if available
            aura: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.aura) || { points: 0, classwork: 0, attendance: 0, help: 0, camera: 0, answers: 0 }, // Initialize with oneRowSelection.aura if available
            payedInfo: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.payedInfo) || false, // Initialize with oneRowSelection.payedInfo if available
            comment: (oneRowSelection === null || oneRowSelection === void 0 ? void 0 : oneRowSelection.comment) || { leaderComment: '', leaderProof: '', controller: { miniLeaderController: '', leaderController: '' } }, // Initialize with oneRowSelection.comment if available
        },
    });
    const formRender = (typeMain, minNum, maxNum, id, label, roles, row) => {
        if (typeMain === 'number') {
            return (React.createElement(FormField, { control: form.control, name: id, render: ({ field, fieldState: { error } }) => (React.createElement(FormItem, { className: "grid grid-cols-4 items-center w-full justify-start gap-2" },
                    React.createElement(FormLabel, { className: "grid-cols-2 capitalize" }, label),
                    React.createElement(FormControl, null,
                        React.createElement(Input, Object.assign({ type: typeMain, className: "col-span-3", placeholder: `Enter ${label}`, min: minNum, max: maxNum }, field, { value: typeof field.value === 'boolean' || typeof field.value === 'object' ? '' : field.value, onChange: (e) => {
                                const value = e.target.value === '' ? '' : Number(e.target.value);
                                const numericValue = Number(value);
                                if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 99) {
                                    field.onChange(value);
                                    handleInputChange(oneRowSelection, id, value);
                                }
                            } }))),
                    React.createElement(FormMessage, { className: "col-span-3" }, error === null || error === void 0 ? void 0 : error.message))) }));
        }
        else if (typeMain === 'string') {
            return (React.createElement(FormField, { control: form.control, name: id, render: ({ field, fieldState: { error } }) => (React.createElement(FormItem, { className: "grid grid-cols-4  items-center w-full justify-start gap-2" },
                    React.createElement(FormLabel, { className: "grid-cols-2" }, label),
                    React.createElement(FormControl, null,
                        React.createElement(Input, Object.assign({ className: "col-span-3", placeholder: `Enter ${label}` }, field, { value: typeof field.value === 'boolean' || typeof field.value === 'object' ? '' : field.value, onChange: (e) => {
                                field.onChange(e);
                                handleInputChange(oneRowSelection, id, e.target.value);
                            } }))),
                    React.createElement(FormMessage, { className: "col-span-3" }, error === null || error === void 0 ? void 0 : error.message))) }));
        }
        else if (typeMain === 'role') {
            return (React.createElement(FormField, { control: form.control, name: id, render: ({ fieldState: { error } }) => (React.createElement(FormItem, { className: "grid grid-cols-4  items-center w-full justify-start gap-2" },
                    React.createElement(FormLabel, { className: "grid-cols-2" }, "Role"),
                    React.createElement(Select, { onValueChange: (value) => handleInputChange(row, 'role', value) },
                        React.createElement(SelectTrigger, { className: "col-span-3" },
                            React.createElement(SelectValue, { placeholder: `${label}` })),
                        React.createElement(SelectContent, null,
                            React.createElement(SelectGroup, null,
                                React.createElement(SelectLabel, { className: "capitalize" }, label),
                                roles.map((role, index) => (React.createElement(SelectItem, { key: index, value: role }, role)))))),
                    React.createElement(FormMessage, { className: "col-span-3" }, error === null || error === void 0 ? void 0 : error.message))) }));
        }
    };
    const handleInputChange = (row, field, value) => {
        if (row && row.original) {
            row.original[field] = value;
            setRowSelection(Object.assign({}, rowSelection));
        }
    };
    const onSubmit = (data) => {
        console.log('Form data:', data);
        setOneRowSelection((prev) => (Object.assign(Object.assign({}, prev), { leaderId: data.leaderId })));
        form.reset({ leaderId: data.leaderId });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `bg-[var(--background)] grid auto-rows-min overflow-hidden gap-4 grid-cols-1 px-2` },
            React.createElement("div", { className: "flex items-center py-4" },
                React.createElement(Input, { placeholder: "Filter name...", value: (_b = (_a = table.getColumn("name")) === null || _a === void 0 ? void 0 : _a.getFilterValue()) !== null && _b !== void 0 ? _b : "", onChange: (event) => { var _a; return (_a = table.getColumn("name")) === null || _a === void 0 ? void 0 : _a.setFilterValue(event.target.value); }, className: "max-w-sm" }),
                React.createElement(DropdownMenu, null,
                    React.createElement(DropdownMenuTrigger, { asChild: true },
                        React.createElement(Button, { variant: "outline", className: "ml-auto" },
                            "Columns ",
                            React.createElement(ChevronDown, null))),
                    React.createElement(DropdownMenuContent, { align: "end" }, table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                        return (React.createElement(DropdownMenuCheckboxItem, { key: column.id, className: "capitalize text-center", checked: column.getIsVisible(), onCheckedChange: (value) => column.toggleVisibility(!!value) }, column.id));
                    })))),
            React.createElement(ScrollArea, null,
                React.createElement("div", { className: "rounded-md border" },
                    React.createElement(Table, null,
                        React.createElement(TableHeader, null, table.getHeaderGroups().map((headerGroup) => (React.createElement(TableRow, { key: headerGroup.id }, headerGroup.headers.map((header) => {
                            return (React.createElement(TableHead, { key: header.id }, header.isPlaceholder
                                ? null
                                : flexRender(header.column.columnDef.header, header.getContext())));
                        }))))),
                        React.createElement(TableBody, null, ((_c = table.getRowModel().rows) === null || _c === void 0 ? void 0 : _c.length) ? (table.getRowModel().rows.map((row) => (React.createElement(Sheet, { key: row.id },
                            React.createElement(SheetTrigger, { asChild: true, onClick: () => setOneRowSelection(row.original) },
                                React.createElement(TableRow, { "data-state": row.getIsSelected() && "selected", style: { backgroundColor: JSON.parse(localStorage.getItem('rowColors') || '{}')[row.original._id] || '' } }, row.getVisibleCells().map((cell) => (React.createElement(TableCell, { key: cell.id }, flexRender(cell.column.columnDef.cell, cell.getContext())))))),
                            React.createElement(AlertDialog, null,
                                React.createElement(SheetContent, null,
                                    React.createElement(SheetHeader, { className: "shadow-sm pb-2" },
                                        React.createElement(SheetTitle, null, "Edit student"),
                                        React.createElement(SheetDescription, null, "Make changes to your profile here. Click save when you're done.")),
                                    React.createElement(ScrollArea, { className: "h-full p-4 pb-16" },
                                        React.createElement(Form, Object.assign({}, form),
                                            React.createElement("form", { onSubmit: form.handleSubmit(onSubmit) },
                                                React.createElement("div", { className: "grid gap-4 py-4" },
                                                    React.createElement("p", { className: "font-bold leading-[5px] text-slate-400" }, "leader edit"),
                                                    formRender('string', 0, 0, 'leaderId', 'Leader ID', [], ''),
                                                    formRender('string', 0, 0, 'name', 'Name', [], ''),
                                                    formRender("number", 0, 99, "age", "Age", [], ''),
                                                    formRender('string', 0, 0, 'studentFbLink', 'Student Facebook Link', [], ''),
                                                    formRender('string', 0, 0, 'email', 'Email', [], ''),
                                                    formRender('string', 0, 0, 'githubLink', 'Github Link', [], ''),
                                                    formRender('number', 0, 4, 'speed', 'Speed', [], ''),
                                                    formRender('role', 0, 0, 'role', 'Role', ['leader', 'mini leader'], oneRowSelection),
                                                    formRender('string', 0, 0, 'parentFbLink', 'Parent Facebook Link', [], ''),
                                                    formRender('string', 0, 0, 'githubToken', 'Github Token', [], ''),
                                                    formRender('string', 0, 0, 'githubLastUpdate', 'Github Last Update', [], ''),
                                                    React.createElement(Separator, null),
                                                    React.createElement(Label, { className: "capitalize font-bold leading-[5px] text-slate-400" }, "Fines"),
                                                    formRender('number', 0, 99, 'fines.githubFine', 'Github Fine', [], ''),
                                                    formRender('number', 0, 99, 'fines.miniLeaderFine', 'Mini Leader Fine', [], ''),
                                                    formRender('number', 0, 99, 'fines.miniStudentFine', 'Mini Student Fine', [], ''),
                                                    React.createElement(Separator, null),
                                                    React.createElement(Label, { className: "capitalize font-bold leading-[5px] text-slate-400" }, "Mentor Section"),
                                                    formRender('number', 0, 999999, 'aura.points', 'Points', [], ''),
                                                    formRender('number', 0, 999999, 'aura.classwork', 'Classwork', [], ''),
                                                    formRender('number', 0, 999999, 'aura.attendance', 'Attendance', [], ''),
                                                    formRender('number', 0, 999999, 'aura.help', 'Help', [], ''),
                                                    formRender('number', 0, 999999, 'aura.camera', 'Camera', [], ''),
                                                    formRender('number', 0, 999999, 'aura.answers', 'Answers', [], ''),
                                                    formRender('boolean', 0, 0, 'payedInfo', 'Payed Info', [], ''),
                                                    React.createElement(Separator, null),
                                                    React.createElement(Label, { className: "capitalize font-bold leading-[5px] text-slate-400" }, "Leader Comment"),
                                                    formRender('string', 0, 0, 'comment.leaderComment', 'Leader Comment', [], ''),
                                                    formRender('string', 0, 0, 'comment.leaderProof', 'Leader Proof', [], ''),
                                                    React.createElement(Separator, null),
                                                    React.createElement(Label, { className: "capitalize font-bold leading-[5px] text-slate-400" }, "Control comment"),
                                                    formRender('string', 0, 0, 'comment.controller.miniLeaderController', 'Mini Leader Controller', [], ''),
                                                    formRender('string', 0, 0, 'comment.controller.leaderController', 'Leader Controller', [], ''),
                                                    React.createElement(Button, { type: "submit" }, "Save changes"))))))))))) : (React.createElement(TableRow, null,
                            React.createElement(TableCell, { colSpan: columns.length, className: "h-24 text-center" }, "No results.")))))),
                React.createElement(ScrollBar, { orientation: "horizontal" })),
            React.createElement("div", { className: " flex items-center justify-end space-x-2 py-4" },
                React.createElement("div", { className: "flex-1 text-sm text-muted-foreground" },
                    table.getFilteredSelectedRowModel().rows.length,
                    " of",
                    " ",
                    table.getFilteredRowModel().rows.length,
                    " row(s) selected."),
                React.createElement("div", { className: "space-x-2" },
                    React.createElement(Button, { variant: "outline", size: "sm", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage() }, "Previous"),
                    React.createElement(Button, { variant: "outline", size: "sm", onClick: () => table.nextPage(), disabled: !table.getCanNextPage() }, "Next"))))));
}
